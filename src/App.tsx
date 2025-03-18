import { Routes, Route, useLocation } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'

// Import layout components
import Header from './components/layout/Header'
import MinimalFooter from './components/layout/ModernFooter'
import ScrollToTop from './components/shared/ScrollToTop'

// Import page components
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  const location = useLocation()
  
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <ScrollToTop />
      <Header />
      <Box as="main" flex="1">
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AnimatePresence>
      </Box>
      <MinimalFooter />
    </Box>
  )
}

export default App 