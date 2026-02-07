import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import Corporate from './pages/Corporate';
import Services from './pages/Services';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Team from './pages/Team';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="kurumsal" element={<Corporate />} />
          <Route path="hizmetler" element={<Services />} />
          <Route path="projeler" element={<Projects />} />
          <Route path="projeler/:slug" element={<ProjectDetail />} />
          <Route path="ekip" element={<Team />} />
          <Route path="iletisim" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
