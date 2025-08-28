import React, { useEffect, useState } from "react";
import "./style.scss";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 990);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 990);
      if (window.innerWidth > 990) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <h1 className="navbar-logo">logo</h1>
          {isMobile ? (
            <FaBars
              className="bars"
              onClick={() => setMenuOpen((prev) => !prev)}
            />
          ) : (
            <ul className="navbar-lists">
              <li className="navbar-list">
                <a href="">Maqolalar</a>
              </li>
              <li className="navbar-list">
                <a href="">Maxsulotlar</a>
              </li>
              <li className="navbar-list">
                <a href="">Foydalanuvchilar</a>
              </li>
            </ul>
          )}
        </nav>

        {menuOpen && isMobile && (
          <div className="mobile-menu">
            <ul className="navbar-lists">
              <li className="navbar-list">
                <a href="">Maqolalar</a>
              </li>
              <li className="navbar-list">
                <a href="">Maxsulotlar</a>
              </li>
              <li className="navbar-list">
                <a href="">Foydalanuvchilar</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
