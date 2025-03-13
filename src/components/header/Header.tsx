import { useEffect, useState } from "react";
import { BiSolidSearch } from "react-icons/bi";
import { BsFilterLeft } from "react-icons/bs";
import { FaFolderMinus, FaStar } from "react-icons/fa6";
import { IoPowerOutline } from "react-icons/io5";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { VscSettings } from "react-icons/vsc";
import { Link } from "react-router-dom";
import styles from "../../styles/header.module.css";

export default function Header() {
  const [activeButton, setActiveButton] = useState<string>("folders");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [logoVisible, setLogoVisible] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleLogoVisible = () => {
    setLogoVisible(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleLogoVisible);
    handleLogoVisible;
    return () => {
      window.removeEventListener("resize", handleLogoVisible);
    };
  }, []);

  return (
    <header className={styles.header}>
      {logoVisible && (
        <div className={styles.logoWrap}>
          <Link
            to={"/"}
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <BsFilterLeft size={10} className={styles.icon} />
            <h1 className={styles.logo}>MyPads</h1>
          </Link>
        </div>
      )}

      {/* Hamburger menu icon for mobile */}
      <div className={styles.hamburger} onClick={handleToggleMenu}>
        {mobileMenuOpen ? <RiCloseLine size={24} /> : <RiMenu3Line size={24} />}
      </div>

      {/* Navigation for desktop and mobile */}
      <div
        className={`${styles.navContainer} ${
          mobileMenuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <div className={styles.logoWrap}>
          <Link
            to={"/"}
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <BsFilterLeft size={10} className={styles.icon} />
            <h1 className={styles.logo}>MyPads</h1>
          </Link>
        </div>
        <div className={styles.wrapButton}>
          <button
            className={`${styles.button} ${
              activeButton === "folders" ? styles.active : ""
            }`}
            onClick={() => {
              setActiveButton("folders");
              setMobileMenuOpen(false);
            }}
          >
            <Link
              to={"/all/my/folders"}
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <FaFolderMinus size={20} />
              Мои папки и заметки
            </Link>
          </button>

          <button
            className={`${styles.button} ${
              activeButton === "bookmarks" ? styles.active : ""
            }`}
            onClick={() => {
              setActiveButton("bookmarks");
              setMobileMenuOpen(false);
            }}
          >
            <Link
              to="/all/my/bookmark"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <FaStar size={20} />
              Мои закладки
            </Link>
          </button>
        </div>
        <nav className={styles.nav}>
          <div className={styles.searchContainer}>
            <BiSolidSearch className={styles.searchIcon} />
            <input type="text" placeholder="Поиск" className={styles.search} />
            <button
              style={{
                border: "none",
                justifyContent: "center",
                alignItems: "center",
                background: "transparent",
                cursor: "pointer",
              }}
            >
              <VscSettings />
            </button>
          </div>
          <button className={styles.logout}>
            <IoPowerOutline size={20} />
          </button>
        </nav>
      </div>
    </header>
  );
}
