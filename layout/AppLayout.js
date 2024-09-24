import { observer } from "mobx-react-lite";
import Navbar from "@/components/Navbar";
// import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Show } from "@/components/ui/Show";
import { useGeneralStore } from "@/providers/generalStore";
import { showUp } from "@/library/animations";
// import WidgetsLayout from "./WidgetsLayout";

const BackDrop = (props) => (
  <Container.Animated
    className="absolute top-0 h-screen w-screen bg-backDrop"
    {...showUp}
    {...props}
  />
);

const WidgetsToggle = ({ isWidgetsOn, setIsWidgetsOn }) => {
  const animate = (isWidgetsOn) => {
    const hidden = {
      position: "absolute",
      right: 0,
      height: "2rem", // 8 in tailwind
      width: "1.25rem", // 5 in tailwind
      marginTop: "2.5rem", // 10 in tailwind
      borderRadius: "1rem", // rounded-2xl
      borderBottomLeftRadius: 0, // rounded-br-none
      borderBottomRightRadius: 0, // rounded-tr-none
      borderTop: "1px solid rgba(255, 255, 255, 0.5)", // border-y border-white/50
      borderLeft: "1px solid rgba(255, 255, 255, 0.5)", // border-l
      zIndex: 10,
    };
    const visible = {
      position: "relative",
    };
    return isWidgetsOn ? visible : hidden;
  };
  return (
    <Container.Animated
      onMouseEnter={() => setIsWidgetsOn(!isWidgetsOn)}
      onMouseLeave={() => setIsWidgetsOn(!isWidgetsOn)}
      animate={animate(isWidgetsOn)}
    />
  );
};

const AppLayout = ({ children }) => {
  const { isWidgetsOn, setIsWidgetsOn } = useGeneralStore();

  return (
    <main className="relative h-screen bg-background">
      <Navbar />
      <Show animatePresence>
        <WidgetsToggle
          isWidgetsOn={isWidgetsOn}
          setIsWidgetsOn={setIsWidgetsOn}
        />
      </Show>
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
