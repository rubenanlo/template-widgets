import clsx from "clsx";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { Show } from "./Show";

export const Button = ({ className, text, children, component, ...props }) => (
  <button className={clsx(className)} {...props}>
    {text || children || component}
  </button>
);

Button.Animated = function ButtonAnimated({
  className,
  text,
  component,
  condition,
  children,
  ...props
}) {
  return (
    <AnimatePresence>
      <Show isTrue={condition}>
        <motion.button className={clsx(className)} {...props}>
          {text || children || component}
        </motion.button>
      </Show>
    </AnimatePresence>
  );
};
