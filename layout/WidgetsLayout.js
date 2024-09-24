import { observer } from "mobx-react-lite";
import WidgetNews from "@/components/widgets/WidgetNews";
import { Show } from "@/components/ui/Show";
import { Container } from "@/components/ui/Container";
import { showUp, toggleWidget } from "@/library/animations";
import { useGeneralStore } from "@/providers/generalStore";

const BackDrop = (props) => (
  <Container.Animated
    className="absolute top-0 h-screen w-screen bg-backDrop"
    {...showUp}
    {...props}
  />
);

const WidgetsLayout = () => {
  const { isWidgetsOn, setIsWidgetsOn } = useGeneralStore();

  return (
    <>
      <Show isTrue={isWidgetsOn} animatePresence>
        <BackDrop />
      </Show>
      <Container.Animated
        onMouseEnter={() => setIsWidgetsOn(!isWidgetsOn)}
        onMouseLeave={() => setIsWidgetsOn(!isWidgetsOn)}
        {...toggleWidget(isWidgetsOn)}
      >
        <Show isTrue={isWidgetsOn}>
          <Container className="fixed inset-y-0 right-0 flex h-full w-96 overflow-auto py-16 scrollbar-hide">
            <Container className="mx-auto flex w-4/5 flex-col space-y-6">
              <WidgetNews />
            </Container>
          </Container>
        </Show>
      </Container.Animated>
    </>
  );
};
export default observer(WidgetsLayout);
