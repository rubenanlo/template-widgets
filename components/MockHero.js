import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import { useEffect, useState } from "react";
import { wordCarousel } from "@/library/animations";

const MockHero = () => {
  const words = ["GitHub", "Email", "Notes", "Calendar"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <Container className="relative isolate mx-auto max-w-7xl overflow-hidden px-6 pb-24 pt-5 sm:pb-32 lg:flex lg:px-8">
      <Container className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
        <Container className="mt-24 sm:mt-32 lg:mt-16">
          <Container.Link href="#" className="inline-flex space-x-6">
            <span className="bg-green-primary/10 ring-green-primary/20 rounded-full px-3 py-1 text-sm font-semibold leading-6 text-green-primary ring-1 ring-inset">
              What&apos;s new
            </span>
            <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6">
              <span>Check our marketplace</span>
              <ChevronRightIcon
                aria-hidden="true"
                className="h-5 w-5 text-gray-500"
              />
            </span>
          </Container.Link>
        </Container>
        <Typography.Title
          title="Are you ready to boost your productivity"
          as="h1"
          className="mt-10"
        />
        <Container.Flex className="mt-10 w-full items-end justify-start gap-x-5">
          <Typography.Paragraph className="text-lg leading-8 text-gray-400">
            Connects all your tools into an evolving HUD:
          </Typography.Paragraph>
          <Container.Animated
            key={currentWordIndex}
            {...wordCarousel}
            className="text-3xl font-semibold text-green-primary"
          >
            <Typography.Paragraph>
              {words[currentWordIndex]}
            </Typography.Paragraph>
          </Container.Animated>
        </Container.Flex>
        <Container href="#" className="mt-12 text-sm font-semibold leading-6">
          Start here, scroll down <span aria-hidden="true">🡣</span>
        </Container>
      </Container>
    </Container>
  );
};

export default MockHero;
