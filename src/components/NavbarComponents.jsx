import { useState, useEffect } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavbarComponents = () => {
  const[changeColor, setChangeColor] = useState(false);
  const changeBackgroundColor = ()=>{
    if(window.scrollY > 10){
      setChangeColor(true); 
    }else{
      setChangeColor(false);
    }
  };

  useEffect(()=>{
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor);
  });
  const links = [
    { path: "/", text: "Home" },
    { path: "/terkini", text: "Terkini" },
    { path: "/kategori", text: "Kategori", isDropdown: true },
    { path: "/author", text: "Author" }
  ];

  return (
    <div>
      <Navbar expand="lg" className={changeColor ? "color-active":""}>
        <Container>
          <Navbar.Brand href="#home" className="fs-3 fw-bold text-white">
            Girls World
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <div className="w-100 d-flex flex-column flex-lg-row justify-content-between align-items-center">
              
              <div className="d-none d-lg-block" style={{ width: '150px' }}></div>

              <Nav className="text-center">
                {links.map((link) => (
                  <div key={link.text} className="nav-link">
                    {link.isDropdown ? (
                      <NavDropdown
                        title={link.text}
                        id={`${link.text.toLowerCase()}-dropdown`}>
                        <NavDropdown.Item as={NavLink} to="/kategori/karir">Karir</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to="/kategori/kesehatan">Kesehatan</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to="/kategori/gaya-hidup">Gaya Hidup</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to="/kategori/hiburan">Hiburan</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to="/kategori/fashion-kecantikan">Fashion & Kecantikan</NavDropdown.Item>
                      </NavDropdown>
                    ) : (
                      <NavLink
                        to={link.path}
                        className={({ isActive, isPending }) =>
                          `nav-link ${isPending ? "pending" : isActive ? "active" : ""}`
                        }
                        end>
                        {link.text}
                      </NavLink>
                    )}
                  </div>
                ))}
              </Nav>

              <div className="mt-3 mt-lg-0 text-center text-lg-end">
                <button className="btn btn-outline-light">Join With Us</button>
              </div>
            </div>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponents;
