import Navbar from "@/components/Navbar";
import Cloud from "@/components/patterns/Cloud";
import { Container } from "@/components/ui/Container";
import WidgetsLayout from "@/layout/WidgetsLayout";

const AppLayout = ({ children }) => (
  <main className="relative flex h-screen flex-col bg-background">
    <WidgetsLayout />
    <Navbar />
    <Cloud />
    <Container
      as="section"
      className="flex-grow overflow-y-auto px-20 pb-5 pt-20"
    >
      {children}
    </Container>
  </main>
);

export default AppLayout;
