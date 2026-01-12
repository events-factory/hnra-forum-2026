
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Speakers from './pages/Speakers';
import Program from './pages/Program';
import Partners from './pages/Partners';
import Destination from './pages/Destination';
import Register from './pages/Register';

// Scroll to top component to ensure new pages start at top
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/program" element={<Program />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
