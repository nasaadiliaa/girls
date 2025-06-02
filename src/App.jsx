import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/NavbarComponents';
import Footer from './components/Footer';

import Homepage from './pages/Homepage';
import Terkini from './pages/Terkini';
import Kategori from './pages/Kategori';
import Author from './pages/Author';
import BeritaDetail from './pages/BeritaDetail';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/terkini" element={<Terkini />} />
        <Route path="/kategori/:slug" element={<Kategori />} />
        <Route path="/author/:name?" element={<Author />} />
        <Route path="/berita/:slug" element={<BeritaDetail />} />
      </Routes>

      {/* Footer hanya muncul kalau bukan di halaman Home */}
      {!isHomePage && <Footer />}
    </div>
  );
}

export default App;
