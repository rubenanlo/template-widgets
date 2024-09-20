import "@/styles/globals.css";
import { GeistSans } from "geist/font/sans";
const App = ({ Component, pageProps }) => (
  <main className={GeistSans.className}>
    <Component {...pageProps} />
  </main>
);

export default App;
