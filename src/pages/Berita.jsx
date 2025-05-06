import React, { useEffect, useState } from "react";
import axios from "axios";

const Berita = () => {
  const [berita, setBerita] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/berita")
      .then((res) => {
        // Jika API return-nya { data: [...] }
        const data = Array.isArray(res.data) ? res.data : res.data.data;
        setBerita(data);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="container py-4">
      {/* Banner Berita */}
      <div className="row mb-5">
        {berita.slice(0, 3).map((item) => (
          <div className="col-md-4 mb-3" key={item.id}>
            <div className="position-relative">
              <img
                src={item.image_url || "/placeholder.jpg"}
                alt={item.title}
                className="w-100 rounded"
                style={{ height: "220px", objectFit: "cover" }}
              />
              <span className="badge bg-orange position-absolute top-0 start-0 m-2">
                {item.kategori || "Umum"}
              </span>
              <div
                className="position-absolute bottom-0 text-white p-2"
                style={{
                  background: "rgba(0,0,0,0.5)",
                  width: "100%",
                  borderBottomLeftRadius: "0.375rem",
                  borderBottomRightRadius: "0.375rem",
                }}
              >
                <h6 className="fw-bold mb-0">{item.title}</h6>
                <small>by {item.author || "Anonim"}</small>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Berita Unggulan */}
      <div className="mb-3">
        <h4 className="fw-bold">Berita Unggulan</h4>
        <p className="text-muted mb-4">Untuk Kamu</p>
        <div className="row">
          {berita.slice(3).map((item) => (
            <div className="col-md-4 mb-4" key={item.id}>
              <div className="card h-100 shadow-sm rounded-3">
                <img
                  src={item.image_url || "/placeholder.jpg"}
                  className="card-img-top"
                  alt={item.title}
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <span className="badge bg-warning text-dark mb-2">
                    {item.kategori || "Umum"}
                  </span>
                  <h6 className="fw-bold card-title">{item.title}</h6>
                  <p className="text-muted" style={{ fontSize: "0.9rem" }}>
                    {item.tanggal || "-"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Berita;
