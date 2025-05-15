import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import bgKategori from '../assets/img/bg.png';


const Kategori = () => {
  const { slug } = useParams();
  const [berita, setBerita] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/api/kategori/${slug}`, {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => setBerita(data));
  }, [slug]);

  return (
    <div className="p-4 min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bgKategori})` }}>
      <h1 className="text-2xl font-bold mb-4 capitalize">Kategori: {slug}</h1>
      {berita.map((item) => (
        <Link
        to={`/berita/${item.slug}`}
        key={item.id}
        className="block mb-4 p-4 border rounded-lg shadow hover:bg-gray-50 transition"
      >
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-auto max-h-60 object-cover my-2 rounded"
        />
        <h2 className="text-lg font-semibold text-blue-600">{item.title}</h2>
        <p dangerouslySetInnerHTML={{ __html: item.content.substring(0, 100) + '...' }} />
      </Link>
      
      ))}
    </div>
  );
};

export default Kategori;
