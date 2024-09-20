import { GeistSans } from "geist/font/sans";
const AppLayout = ({ children }) => {
  return (
    <main className={`${GeistSans.className} bg-background`}>{children}</main>
  );
};

export default AppLayout;
