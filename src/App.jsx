import { Routes, Route} from 'react-router-dom';

import Navbar from './components/NavbarComponents';
// import Footer from './components/Footer';

import Homepage from './pages/Homepage';
import Berita from './pages/Berita';
import Kategori from './pages/Kategori';
import Author from './pages/Author';

function App() {
  return (
      <div>
        <Navbar/>

        <Routes>
          <Route path="/" Component={Homepage} />
          <Route path="/berita" Component={Berita} />
          <Route path="/kategori-berita" Component={Kategori} />
          <Route path="/author" Component={Author} />
        </Routes>

        {/* <Footer/> */}
      </div>
  )
}

export default App
