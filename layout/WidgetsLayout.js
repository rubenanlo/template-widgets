import { Fragment } from "react";
import { observer } from "mobx-react-lite";
import { Show } from "@/components/ui/Show";
import { Container } from "@/components/ui/Container";
import { showUp, toggleWidget } from "@/library/animations";
import { widgets } from "@/library/widgets";
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
        className="scrollbar-hide"
      >
        <Show isTrue={isWidgetsOn}>
          <Container.Flex className="mx-auto w-4/5 flex-col space-y-6">
            {widgets.map(({ name, component }) => (
              <Fragment key={name}>{component}</Fragment>
            ))}
          </Container.Flex>
        </Show>
      </Container.Animated>
    </>
  );
};
export default observer(WidgetsLayout);
