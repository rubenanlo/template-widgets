import { Container } from "@/components/ui/Container";
const AppLayout = ({ children }) => {
  return (
    <main className="relative min-h-screen bg-background">
      <Container>
        <Container as="section" className="px-20 pb-5 pt-20">
          {children}
        </Container>
      </Container>
    </main>
  );
};

export default AppLayout;
