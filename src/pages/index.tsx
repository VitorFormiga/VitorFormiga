// pages/index.js
import React from 'react';
import Link from 'next/link'; // Importe o componente Link

export default function Home() {
  return (
    <div>
      <h1>Bem-vindo à Página Inicial!</h1>
      <p>Conteúdo da homepage no Vercel.</p>
	  <Link href="/login">
        <button>Ir para a Página de Login</button>
      </Link>
    </div>
  );
}