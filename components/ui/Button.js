import clsx from "clsx";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { Show } from "./Show";
//The component normally acceted here is intended to be an svg or tailwind icon
export const Button = ({ className, text, component, ...props }) => (
  <button className={clsx(className)} {...props}>
    {text || component}
  </button>
);

Button.Animated = function ButtonAnimated({
  className,
  text,
  component,
  condition,
  ...props
}) {
  return (
    <AnimatePresence>
      <Show isTrue={condition}>
        <motion.button className={clsx(className)} {...props}>
          {text || component}
        </motion.button>
      </Show>
    </AnimatePresence>
  );
};
