"use client"

import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className="rodape">
        <p>Junte-se a comunidade Nexus e transforme seu futuro</p>
        <Link href="/cadastro" className="btn">QUERO FAZER PARTE </Link>
    </footer>
  )
}
