// App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './ui/pages/Home'
import AIFeaturePage from './ui/pages/enterpriseAI'
import ArticlePage from './ui/pages/Article'
import ArticleLargePage from './ui/pages/ArticleLarge'
import ArticleSmallPage1 from './ui/pages/ArticleSmall1'
import ArticleSmallPage2 from './ui/pages/ArticleSmall2'
import ArticleSmallPage3 from './ui/pages/ArticleSmall3'
import SoftwareDevelopmentPage from './ui/pages/softwaredev'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enterprise-ai" element={<AIFeaturePage />} />
        <Route path="/article" element={<ArticlePage />} />
        <Route path="/llms-unstructured-information-engines" element={<ArticleLargePage />} />
        <Route path="/context-engineering-enterprise-ai-stack" element={<ArticleSmallPage1 />} />
        <Route path="/local-experimentation-read-first-guardrails" element={<ArticleSmallPage2 />} />
        <Route path="/how-to-end-work-slop" element={<ArticleSmallPage3 />} />
        <Route path="/softwaredev" element={<SoftwareDevelopmentPage />} />
      </Routes>
    </BrowserRouter>
  )
}