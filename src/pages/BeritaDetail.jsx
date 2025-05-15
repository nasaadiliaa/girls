import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">{berita.title}</h1>
      
      {/* Menampilkan gambar thumbnail */}
      <img
        src={berita.thumbnail} // Gambar dari API
        alt={berita.title}
        className="w-full h-auto max-h-80 object-cover my-4 rounded"
      />
      
      {/* Menampilkan konten berita */}
      <div dangerouslySetInnerHTML={{ __html: berita.content }} />
    </div>
  );
};

export default BeritaDetail;
