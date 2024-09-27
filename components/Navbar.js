import { Container } from "@/components/ui/Container";

const Navbar = () => {
  return (
    <Container
      as="nav"
      className="sticky top-0 z-10 border-b border-zinc-200/20 bg-background px-4 py-5"
    >
      <Container.Image name="antispace-logo" />
    </Container>
  );
};

export default Navbar;
