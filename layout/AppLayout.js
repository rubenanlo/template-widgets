import Navbar from "@/components/Navbar";
import Cloud from "@/components/patterns/Cloud";
import { Container } from "@/components/ui/Container";
import WidgetsLayout from "@/layout/WidgetsLayout";

const AppLayout = ({ children }) => {
  return (
    <main className="relative h-screen bg-background">
      <WidgetsLayout />
      <Navbar />
      <Container as="section" className="px-20 pb-5 pt-20">
        <Cloud />
        {children}
      </Container>
    </main>
  );
};

export default AppLayout;
