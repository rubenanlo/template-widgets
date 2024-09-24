import { observer } from "mobx-react-lite";
import { Show } from "@/components/ui/Show";
import { Container } from "@/components/ui/Container";
import { showUp, toggleWidget } from "@/library/animations";
import { useGeneralStore } from "@/providers/generalStore";
import WidgetNews from "@/components/widgets/WidgetNews";

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
const WidgetsLayout = () => {
  const { isWidgetsOn, setIsWidgetsOn } = useGeneralStore();

  return (
    <>
      <WidgetsToggle
        isWidgetsOn={isWidgetsOn}
        setIsWidgetsOn={setIsWidgetsOn}
      />
      <Show isTrue={isWidgetsOn} animatePresence>
        <BackDrop />
      </Show>
      <Container className="fixed inset-y-0 right-0 flex h-full w-96 overflow-auto bg-white py-16 scrollbar-hide">
        <Container className="mx-auto flex w-4/5 flex-col space-y-6 border">
          <WidgetNews />
        </Container>
      </Container>
    </>
  );
};
export default observer(WidgetsLayout);
