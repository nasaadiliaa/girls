import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import bgKategori from '../assets/img/bg.png';
import './Kategori.css';

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
    <main
      className="kategori-page"
      style={{ backgroundImage: `url(${bgKategori})` }}
    >
      <h1 className="kategori-title">Kategori: {slug}</h1>
      <div className="kategori-grid">
        {berita.map((item) => (
          <div className="card-berita" key={item.id}>
            <img
              src={item.thumbnail}
              alt={item.title}
              className="card-thumbnail"
            />
            <h2 className="card-title">{item.title}</h2>
            <p className="card-caption">
              {item.content.replace(/<\/?[^>]+(>|$)/g, '').substring(0, 100) + '...'}</p>
            <Link to={`/berita/${item.slug}`} className="card-button">
              Selengkapnya
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Kategori;
