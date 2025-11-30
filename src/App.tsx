
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { PropertyDetails } from './pages/PropertyDetails';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Blog } from './pages/Blog';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Properties } from './pages/Properties';
import { ThemeProvider } from './context/ThemeContext';
import { FavoritesProvider } from './context/FavoritesContext';

import { ScrollToTop } from './components/common/ScrollToTop';

function App() {
  return (
    <ThemeProvider>
      <FavoritesProvider>
        <Router>
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="/property/:id" element={<PropertyDetails />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              {/* Fallback route */}
              <Route path="*" element={<Home />} />
            </Routes>
          </Layout>
        </Router>
      </FavoritesProvider>
    </ThemeProvider>
  );
}

export default App;
