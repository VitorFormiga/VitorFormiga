// pages/index.js (ou onde quer que seu Home.js esteja)

import Link from 'next/link'; // Importe o componente Link

export default function Home() {
  return (
    <div>
      <h1>VitorFormiga - Página Inicial</h1>
      <p>Seja bem-vindo!</p>
      <Link href="/login">
        <button>Ir para a Página de Login</button>
      </Link>
    </div>
  );
}