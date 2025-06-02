import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CardBerita.css'; 

const CardBerita = ({ id, thumbnail, title, content, slug }) => {
  const navigate = useNavigate();

  console.log('thumbnail:', thumbnail);

  const handleClick = () => {
    navigate(`/berita/${slug}`);
  };

  return (
    <div className="card-berita">
      <img
      src={thumbnail}
      alt={title}
      className="card-berita-thumbnail"
      />

      <h3 className="card-berita-title">{title}</h3>
      <p className="card-berita-content">
        {content.replace(/<[^>]*>?/gm, '').substring(0, 100)}...
      </p>
      <button className="card-berita-button" onClick={handleClick}>
        Selengkapnya
      </button>
    </div>
  );
};

export default CardBerita;
