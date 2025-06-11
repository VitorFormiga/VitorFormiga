// pages/index.js
import React from 'react';
import Link from 'next/link'; // Importe o componente Link

import styles from '../styles/home.module.css'; // Importe o módulo CSS

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bem-vindo à Página Inicial!</h1>
      <p>Conteúdo da homepage no Vercel.</p>
	  <Link href="/login">
        <button>Ir para a Página de Login</button>
      </Link>
    </div>
  );
}