import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import bgBerita from '../assets/img/bg.png';
import './BeritaDetail.css';

const BeritaDetail = () => {
  const { slug } = useParams();
  const [berita, setBerita] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/api/berita/${slug}`)
      .then((res) => res.json())
      .then((data) => setBerita(data));
  }, [slug]);

  if (!berita) return <p>Loading...</p>;

  return (
    <div
      className="berita-detail-container"
      style={{ backgroundImage: `url(${bgBerita})` }}
    >
      <h1 className="berita-title">{berita.title}</h1>

      <div className="berita-thumbnail-wrapper">
        <img
          src={berita.thumbnail}
          alt={berita.title}
          className="berita-thumbnail"
        />
      </div>

      <div dangerouslySetInnerHTML={{ __html: berita.content }} />
    </div>
  );
};

export default BeritaDetail;
