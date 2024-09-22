import { observer } from "mobx-react-lite";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Show } from "@/components/ui/Show";
import WidgetsLayout from "@/layout/WidgetsLayout";
import { useGeneralStore } from "@/providers/generalStore";

const AppLayout = ({ children }) => {
  const { isWidgetsOn, setIsWidgetsOn } = useGeneralStore();
  return (
    <main className="relative min-h-screen bg-background">
      <Navbar />
      <Container as="section" className="px-20 pb-5 pt-20">
        {children}
      </Container>
      <Button onMouseEnter={() => setIsWidgetsOn(!isWidgetsOn)} variant="tag" />
      <Show isTrue={[isWidgetsOn]}>
        <Container className="absolute top-0 h-screen w-screen bg-backDrop opacity-30" />
      </Show>
      <WidgetsLayout />
    </main>
  );
};

export default observer(AppLayout);
