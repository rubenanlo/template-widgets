import AppLayout from "@/layout/AppLayout";
import RootProviders from "@/providers/rootProviders";
import "@/styles/globals.css";

const App = ({ Component, pageProps }) => (
  <RootProviders>
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  </RootProviders>
);

export default App;
