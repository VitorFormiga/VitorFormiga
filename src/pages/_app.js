// pages/_app.js
import '../styles/globals.css'; // Importe o CSS global

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;