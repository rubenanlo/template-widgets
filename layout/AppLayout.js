import Navbar from "@/components/Navbar";
import { Container } from "@/components/ui/Container";
import WidgetsLayout from "./WidgetsLayout";

const AppLayout = ({ children }) => {
  return (
    <main className="relative h-screen bg-background">
      <WidgetsLayout />
      <Navbar />
      <Container as="section" className="px-20 pb-5 pt-20">
        {children}
      </Container>
    </main>
  );
};

export default AppLayout;
