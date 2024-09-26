import { observer } from "mobx-react-lite";
import { Show } from "@/components/ui/Show";
import { Container } from "@/components/ui/Container";
import { showUp, toggleWidget } from "@/library/animations";
import { widgets } from "@/library/widgets";
import { useGeneralStore } from "@/providers/generalStore";
import { Typography } from "@/components/ui/Typography";

const BackDrop = (props) => (
  <Container.Animated
    className="absolute top-0 z-10 h-screen w-screen bg-backDrop"
    {...showUp}
    {...props}
  />
);
const WidgetsLayout = () => {
  const { isWidgetsOn, setIsWidgetsOn } = useGeneralStore();

  const handleMouseEnter = () => {
    if (!isWidgetsOn) setIsWidgetsOn(true);
  };

  const handleMouseLeave = () => {
    if (isWidgetsOn) setIsWidgetsOn(false);
  };

  return (
    <>
      <Show isTrue={isWidgetsOn} animatePresence>
        <BackDrop />
      </Show>
      <Container.Animated
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...toggleWidget(isWidgetsOn)}
        className="shadow-2xl shadow-gray-700"
      >
        <Show isTrue={isWidgetsOn}>
          <Container.Flex className="mx-auto h-[90%] w-4/5 flex-col gap-y-16 overflow-auto scrollbar-hide">
            {widgets.map(({ name, component }) => (
              <Container key={name}>
                <Typography.Title title={name} as="h2" />
                <Container
                  key={name}
                  className="relative mt-6 h-80 p-4 scrollbar-hide"
                >
                  {component}
                </Container>
              </Container>
            ))}
          </Container.Flex>
        </Show>
      </Container.Animated>
    </>
  );
};

export default observer(WidgetsLayout);
