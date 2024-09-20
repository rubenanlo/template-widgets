import Navbar from "@/components/Navbar";
const AppLayout = ({ children }) => {
  return (
    <main className="bg-background font-interphase">
      <Navbar />
      {children}
    </main>
  );
};

export default AppLayout;
