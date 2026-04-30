import express from 'express';
import path from 'node:path';
import { promises as fs } from 'node:fs';

const app = express();
const PORT = Number(process.env.PORT ?? 8787);
const subscribersFile = path.resolve(process.cwd(), 'server', 'subscribers.json');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

app.use(express.json());

async function readSubscribers(): Promise<string[]> {
  try {
    const raw = await fs.readFile(subscribersFile, 'utf-8');
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed.filter((item): item is string => typeof item === 'string');
    }
    return [];
  } catch (error) {
    return [];
  }
}

async function writeSubscribers(emails: string[]): Promise<void> {
  await fs.mkdir(path.dirname(subscribersFile), { recursive: true });
  await fs.writeFile(subscribersFile, JSON.stringify(emails, null, 2));
}

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.post('/api/email-capture', async (req, res) => {
  const rawEmail = req.body?.email;
  const email = typeof rawEmail === 'string' ? rawEmail.trim().toLowerCase() : '';

  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({
      ok: false,
      message: 'Please enter a valid email address.',
    });
  }

  try {
    const subscribers = await readSubscribers();
    if (subscribers.includes(email)) {
      return res.status(200).json({
        ok: true,
        message: 'You are already on the dispatch list.',
      });
    }

    subscribers.push(email);
    await writeSubscribers(subscribers);

    return res.status(201).json({
      ok: true,
      message: 'Welcome to the paper joy list.',
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: 'Unable to save your email right now. Please try again.',
    });
  }
});

app.listen(PORT, () => {
  console.log(`Email capture API running at http://localhost:${PORT}`);
});
