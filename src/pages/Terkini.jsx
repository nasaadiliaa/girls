import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import bgTerkini from '../assets/img/bg.png';

const Terkini = () => {
  const [berita, setBerita] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/berita-terkini')
      .then((res) => res.json())
      .then((data) => setBerita(data));
  }, []);

  return (
      <div className="flex justify-center items-center h-screen pt-5" style={{ backgroundImage: `url(${bgTerkini})` }}>
      <h1 className="text-2xl font-bold text-center mb-4 pt-5">Berita Terkini</h1>
      {berita.map((item) => (
        <Link
          to={`/berita/${item.slug}`}
          key={item.id}
          className="block mb-4 p-4 border rounded-lg shadow hover:bg-gray-50 transition"
        >
          {/* Menampilkan gambar thumbnail */}
          <img
            src={item.thumbnail} // Pastikan API mengirimkan URL gambar yang benar
            alt={item.title}
            className="w-full h-auto max-h-60 object-cover my-2 rounded"
          />
          <h2 className="text-lg font-semibold">{item.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: item.content.substring(0, 100) + '...' }} />
        </Link>
      ))}
    </div>
  );
};

export default Terkini;
