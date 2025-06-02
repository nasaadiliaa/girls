import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CardAuthor.css'; 

const CardAuthor = ({ id, thumbnail, title, content, slug }) => {
  const navigate = useNavigate();

  console.log('thumbnail:', thumbnail);

  const handleClick = () => {
    navigate(`/berita/${slug}`);
  };

  return (
    <div className="card-author">
      <img
      src={`http://localhost:8000/storage/${thumbnail}`}
      alt={title}
      className="card-author-thumbnail"
    />

      <h3 className="card-author-title">{title}</h3>
      <p className="card-author-content">
        {content.replace(/<[^>]*>?/gm, '').substring(0, 100)}...
      </p>
      <button className="card-author-button" onClick={handleClick}>
        Selengkapnya
      </button>
    </div>
  );
};

export default CardAuthor;
