"use client"

import { useState } from "react"
import styles from "../../styles/header.module.css"
import { HiMiniBars3BottomLeft } from "react-icons/hi2"
import { FaStar, FaFolderMinus } from "react-icons/fa6"
import { IoPowerOutline } from "react-icons/io5"
import { BiSolidSearch } from "react-icons/bi"
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
import { Link } from "react-router-dom"

export default function Header() {
  const [activeButton, setActiveButton] = useState<string>("folders")
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className={styles.header}>
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
          <HiMiniBars3BottomLeft size={10} className={styles.icon} />
          <h1 className={styles.logo}>MyPads</h1>
        </Link>
      </div>

      {/* Hamburger menu icon for mobile */}
      <div className={styles.hamburger} onClick={toggleMobileMenu}>
        {mobileMenuOpen ? <RiCloseLine size={24} /> : <RiMenu3Line size={24} />}
      </div>

      {/* Navigation for desktop and mobile */}
      <div className={`${styles.navContainer} ${mobileMenuOpen ? styles.mobileMenuOpen : ""}`}>
        <div className={styles.wrapButton}>
          <button
            className={`${styles.button} ${activeButton === "folders" ? styles.active : ""}`}
            onClick={() => {
              setActiveButton("folders")
              setMobileMenuOpen(false)
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
            className={`${styles.button} ${activeButton === "bookmarks" ? styles.active : ""}`}
            onClick={() => {
              setActiveButton("bookmarks")
              setMobileMenuOpen(false)
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

        {/* SEARCH BAR WITH ICON */}
        <nav className={styles.nav}>
          <div className={styles.searchContainer}>
            <BiSolidSearch className={styles.searchIcon} />
            <input type="text" placeholder="Поиск" className={styles.search} />
          </div>
          <button className={styles.logout}>
            <IoPowerOutline size={20} />
          </button>
        </nav>
      </div>
    </header>
  )
}

