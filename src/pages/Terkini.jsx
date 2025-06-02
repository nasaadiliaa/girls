import React, { useEffect, useState } from 'react';
import bgTerkini from '../assets/img/bg.png';
import CardBerita from '../components/CardBerita';
import './Terkini.css'; 

const Terkini = () => {
  const [berita, setBerita] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/berita-terkini')
      .then((res) => res.json())
      .then((data) => setBerita(data));
  }, []);

  return (
    <main
      className="terkini-page"
      style={{
        backgroundImage: `url(${bgTerkini})`,
      }}
    >
      <h1 className="terkini-title">Berita Terkini</h1>
      <div className="terkini-grid">
        {berita.map((item) => (
          <CardBerita
            key={item.id}
            id={item.id}
            thumbnail={item.thumbnail}
            title={item.title}
            content={item.content}
            slug={item.slug}
          />
        ))}
      </div>
    </main>
  );
};

export default Terkini;
