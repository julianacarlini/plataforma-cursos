//Para renderizar no navegador (desabilita ssr)
"use client"

import Link from 'next/link'
import React, { useState } from 'react'

interface Props{
    login?: boolean
    unfixed? : boolean
}

export default function Header(props: Props) {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    const handleOpenMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className={`cabecalho ${props?.unfixed && "unfixed"}`} id="cabecalho">
        <nav className="nav" aria-label="Menu principal">
            <a href="/#topo">
                <img src="/assets/images/logoNexus.png" alt="Logotipo da Nexus" className="logo" />
            </a>
            {!props.login && <>
            <ul id="menu-list" className={`nav-list ${isMenuOpen && "active"}`}>
                <li><a href="#sobre" className="button">Sobre</a></li>
                <li><Link href="/curso" className="button">Cursos</Link></li>
                <li><a href="#como-se-inscrever" className="button">Como se inscrever</a></li>
                {/*<li id="dark-mode-toggle-mobile" className="dark-mode-toggle-mobile">
                    <span>Tema</span>
                    <div className="theme-icon-container">
                        <svg className="theme-icon sun-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="5"></circle>
                            <line x1="12" y1="1" x2="12" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="23"></line>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                            <line x1="1" y1="12" x2="3" y2="12"></line>
                            <line x1="21" y1="12" x2="23" y2="12"></line>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                            <line x1 ="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                        </svg>
                        <svg className="theme-icon moon-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </div>
                </li>*/}
                <li className="login-item-mobile">
                    <img src="/assets/images/logo-icon.png" alt="Ícone de Login" className="login-icon-mobile" />
                    <Link href="/login" className="button">Login</Link>
                </li>
            </ul>
            <div className={`hamburguer-menu ${isMenuOpen && "active"}`} onClick={handleOpenMenu} role="button" aria-expanded="false" aria-controls="menu-list"
                aria-label="Ícone menu">
                <span className="hamburguer-menu-top-line"></span>
                <span className="hamburguer-menu-center-line"></span>
                <span className="hamburguer-menu-bottom-line"></span>
            </div>
            {/*<div id="dark-mode-toggle-desktop" className="dark-mode-toggle">
                <svg className="theme-icon sun-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
                <svg className="theme-icon moon-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
            </div>*/}
            </>}
        </nav>
    </header>
  )
}
