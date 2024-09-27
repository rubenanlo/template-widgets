import { observer } from "mobx-react-lite";
import { Show } from "@/components/ui/Show";
import { Container } from "@/components/ui/Container";
import { fromTop, rotate, showUp, toggleWidget } from "@/library/animations";
import { widgets } from "@/library/widgets";
import { useGeneralStore } from "@/providers/generalStore";
import { Typography } from "@/components/ui/Typography";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { Button } from "@/components/ui/Button";

const BackDrop = (props) => (
  <Container.Animated
    className="absolute top-0 z-20 h-screen w-screen bg-backDrop"
    {...showUp}
    {...props}
  />
);
const WidgetsLayout = () => {
  const { isWidgetsOn, setIsWidgetsOn } = useGeneralStore();
  const { widgetsDisplay, toggleWidgetDisplay } = useGeneralStore();

  const handleMouseEnter = () => {
    if (!isWidgetsOn) setIsWidgetsOn(true);
  };

  const handleMouseLeave = () => {
    if (isWidgetsOn) setIsWidgetsOn(false);
  };

  const handleOnClick = (index) => {
    toggleWidgetDisplay(index);
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
        className="z-20 shadow-2xl shadow-gray-700"
      >
        <Show isTrue={isWidgetsOn}>
          <Container.Flex className="mx-auto h-[90%] w-4/5 flex-col gap-y-16 overflow-auto scrollbar-hide">
            {widgets.map(({ name, component }, index) => (
              <Container key={name}>
                <Container.Flex className="justify-between border-b border-zinc-600 pb-2">
                  <Typography.Title title={name} as="h2" />
                  <Button.Animated
                    className="w-5"
                    component={<ChevronRightIcon />}
                    onClick={() => handleOnClick(index)}
                    {...rotate(widgetsDisplay[index].display)}
                  />
                </Container.Flex>
                <Show isTrue={widgetsDisplay[index].display} animatePresence>
                  <Container.Animated
                    key={name}
                    className="relative mt-6 p-4 scrollbar-hide"
                    {...fromTop}
                  >
                    {component}
                  </Container.Animated>
                </Show>
              </Container>
            ))}
          </Container.Flex>
        </Show>
      </Container.Animated>
    </>
  );
};

export default observer(WidgetsLayout);
