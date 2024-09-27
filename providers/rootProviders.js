import { GeneralStoreProvider } from "@/providers/generalStore";

//Created this provider to wrap all the other future providers in the application.
const RootProviders = ({ children }) => (
  <GeneralStoreProvider>{children}</GeneralStoreProvider>
);

export default RootProviders;
