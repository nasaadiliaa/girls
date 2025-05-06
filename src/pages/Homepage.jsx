import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/hero.png";

import { useNavigate } from "react-router-dom";

const Homepage = () => {
  let navigate = useNavigate();
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6">
            <h1 className="mb-4">
              Membaca <br /> <span>Berita Perempuan</span> <br />Masa Kini!
              </h1>
              <p className="mb-4">Dapatkan informasi terbaru seputar perempuan dari berbagai penjuru dunia. 
                Kami menyajikan berita yang inspiratif, edukatif, dan penuh semangat positif. 
                Bersama Girls World, kamu bisa membaca cerita-cerita yang membangkitkan semangat dan kesadaran akan peran penting perempuan dalam kehidupan.</p>
              <button className="btn custom-lavender btn-lg rounded-1 me-2 mb-xs-0 mb-2" onClick={()=>navigate("/terkini")}>Baca Berita</button>
              <button className="btn custom-outline-lavender btn-lg rounded-1 mb-xs-0 mb-2" onClick={()=>navigate("/author")}>Lihat Author</button>
              </Col>
              <Col lg="6" pt-lg-0 pt-5>
              <img src={HeroImage} alt="hero-img" />
              </Col>
          </Row>
          {/* <Row>
            <Col className="text-center">
            <button className="btn btn-success rounded-5 btn-lg" onClick={()=>navigate}>

            </button>
            </Col>
          </Row> */}
        </Container>
      </header>
      {/* <div className="kelas w-100 min-vh-100"></div> */}
    </div>
  )
}

export default Homepage
