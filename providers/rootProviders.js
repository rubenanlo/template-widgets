import { GeneralStoreProvider } from "@/providers/generalStore";

const RootProviders = ({ children }) => (
  <GeneralStoreProvider>{children}</GeneralStoreProvider>
);

export default RootProviders;
