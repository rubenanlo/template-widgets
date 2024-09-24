import { observer } from "mobx-react-lite";
import Navbar from "@/components/Navbar";
// import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Show } from "@/components/ui/Show";
import { useGeneralStore } from "@/providers/generalStore";
import { showUp, toggleWidget } from "@/library/animations";
// import WidgetsLayout from "./WidgetsLayout";

const BackDrop = (props) => (
  <Container.Animated
    className="absolute top-0 h-screen w-screen bg-backDrop"
    {...showUp}
    {...props}
  />
);

const WidgetsToggle = ({ isWidgetsOn, setIsWidgetsOn }) => (
  <Container.Animated
    onMouseEnter={() => setIsWidgetsOn(!isWidgetsOn)}
    onMouseLeave={() => setIsWidgetsOn(!isWidgetsOn)}
    {...toggleWidget(isWidgetsOn)}
    // component={isWidgetsOn && <WidgetsLayout />}
  />
);

const AppLayout = ({ children }) => {
  const { isWidgetsOn, setIsWidgetsOn } = useGeneralStore();

  return (
    <main className="relative h-screen bg-background">
      <WidgetsToggle
        isWidgetsOn={isWidgetsOn}
        setIsWidgetsOn={setIsWidgetsOn}
      />
      <Navbar />
      <Show isTrue={isWidgetsOn} animatePresence>
        <BackDrop />
      </Show>
      <Container as="section" className="px-20 pb-5 pt-20">
        {children}
      </Container>
      {/* <WidgetsLayout /> */}
    </main>
  );
};

export default observer(AppLayout);
