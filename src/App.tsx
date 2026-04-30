/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

// Lazy-loaded routes — only download when the user navigates there.
const OurProcess    = lazy(() => import('./pages/OurProcess'));
const Editions      = lazy(() => import('./pages/Editions'));
const EditionStory  = lazy(() => import('./pages/EditionStory'));
const TheGuide      = lazy(() => import('./pages/TheGuide'));
const Faith         = lazy(() => import('./pages/Faith'));
const Creators      = lazy(() => import('./pages/Creators'));
const Gifting       = lazy(() => import('./pages/Gifting'));
const Faq           = lazy(() => import('./pages/Faq'));
const FaithEditions = lazy(() => import('./pages/FaithEditions'));
const FaithStory    = lazy(() => import('./pages/FaithStory'));

export default function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/process" element={<OurProcess />} />
            <Route path="/editions" element={<Editions />} />
            <Route path="/editions/story/:storyId" element={<EditionStory />} />
            <Route path="/guide" element={<TheGuide />} />
            <Route path="/faith" element={<Faith />} />
            <Route path="/faith/editions" element={<FaithEditions />} />
            <Route path="/faith/editions/story/:storyId" element={<FaithStory />} />
            <Route path="/creators" element={<Creators />} />
            <Route path="/gifting" element={<Gifting />} />
            <Route path="/faq" element={<Faq />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}
