import { Container } from "./ui/Container";

const Navbar = () => {
  return (
    <Container as="nav" className="border-b border-zinc-200/20 px-4 py-5">
      <Container.Image name="antispace-logo" />
    </Container>
  );
};

export default Navbar;
