import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import bgAuthor from '../assets/img/bg.png';


const Author = () => {
  const { name } = useParams();
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/api/author/${name}`, {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => setAuthor(data));
  }, [name]);

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
          className="w-24 h-24 rounded-full object-cover mb-2"
        />
        <h1 className="text-2xl font-bold">{author.name}</h1>
        <p className="text-gray-600">@{author.username}</p>
        <p className="mt-1">{author.bio}</p>
      </div>

      <h2 className="text-xl font-semibold mb-2">Berita oleh {author.name}:</h2>
      {author.berita && author.berita.length > 0 ? (
        author.berita.map((item) => (
          <div key={item.id} className="mb-4 p-4 border rounded-lg shadow">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: item.content.substring(0, 100) + '...' }} />
          </div>
        ))
      ) : (
        <p>Belum ada berita.</p>
      )}
    </div>
  );
};

export default Author;
