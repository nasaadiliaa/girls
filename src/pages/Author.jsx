import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import bgAuthor from '../assets/img/bg.png';
import './Author.css'; 
import CardAuthor from '../components/CardAuthor';

const Author = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [author, setAuthor] = useState(null);
  const [allAuthors, setAllAuthors] = useState([]);

  useEffect(() => {
    if (name) {
      fetch(`http://localhost:8000/api/author/${name}`, {
        credentials: 'include',
      })
        .then((res) => res.json())
        .then((data) => setAuthor(data));
    } else {
      fetch(`http://localhost:8000/api/author`, {
        credentials: 'include',
      })
        .then((res) => res.json())
        .then((data) => setAllAuthors(data));
    }
  }, [name]);

  if (!name && allAuthors.length === 0) {
    return <div className="p-4">Loading...</div>;
  }

  if (!name && allAuthors.length > 0) {
    return (
      <div
        className="author-page"
        style={{
          backgroundImage: `url(${bgAuthor})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="author-title">
          <h1 className='mt-5'>Daftar Penulis</h1>
        </div>

        <div className="author-grid">
          {allAuthors.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/author/${item.username}`)}
              className="author-card"
            >
              <img
                src={`http://localhost:8000/storage/${item.avatar}`}
                alt={item.name}
                className="author-avatar-all"
              />
              <h2>{item.name}</h2>
              <p>@{item.username}</p>
              <p className="author-bio">{item.bio}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!author) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div
      className="p-4 min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgAuthor})` }}
    >
      <div className="mb-6">
        <img
          src={`http://localhost:8000/storage/${author.avatar}`}
          alt={author.name}
          className="author-avatar"
        />
        <h1 className="text-2xl font-bold">{author.name}</h1>
        <p className="text-gray-600">@{author.username}</p>
        <p className="mt-1">{author.bio}</p>
      </div>

      <h2 className="text-xl font-semibold mb-2">Berita oleh {author.name}:</h2>
{author.news && author.news.length > 0 ? (
  <div className="author-news-grid">
    {author.news.map((item) => (
      <CardAuthor
        key={item.id}
        id={item.id}
        thumbnail={item.thumbnail}
        title={item.title}
        content={item.content}
        slug={item.slug}
        smallThumbnail={true} 
      />
    ))}
  </div>
) : (
  <p>Belum ada berita.</p>
)}

    </div>
  );
};

export default Author;
