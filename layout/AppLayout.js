import Navbar from "@/components/Navbar";
import { Container } from "@/components/ui/Container";
import WidgetsLayout from "@/layout/WidgetsLayout";
const AppLayout = ({ children }) => {
  return (
    <main className="relative min-h-screen bg-background">
      <Navbar />
      <Container>
        <Container as="section" className="px-20 pb-5 pt-20">
          {children}
        </Container>
        <Container className="absolute top-0 h-screen w-screen bg-backDrop opacity-30" />
      </Container>
      <WidgetsLayout />
    </main>
  );
};

export default AppLayout;
