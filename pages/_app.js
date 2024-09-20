import AppLayout from "@/layout/AppLayout";
import "@/styles/globals.css";

const App = ({ Component, pageProps }) => (
  <AppLayout>
    <Component {...pageProps} />
  </AppLayout>
);

export default App;
