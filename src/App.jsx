import { Routes, Route} from 'react-router-dom';

import Navbar from './components/NavbarComponents';
// import Footer from './components/Footer';

import Homepage from './pages/Homepage';
import Terkini from './pages/Terkini';
import Kategori from './pages/Kategori';
import Author from './pages/Author';
import BeritaDetail from './pages/BeritaDetail';


function App() {
  return (
      <div>
        <Navbar/>

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/terkini" element={<Terkini />} />
          <Route path="/kategori/:slug" element={<Kategori />} />
          <Route path="/author" element={<p>Silakan pilih author.</p>} />
          <Route path="/author/:name" element={<Author />} />
          <Route path="/berita/:slug" element={<BeritaDetail />} />
        </Routes>


        {/* <Footer/> */}
      </div>
  )
}

export default App
