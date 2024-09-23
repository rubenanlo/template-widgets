// Goes with animatePresence hook
export const showUp = {
  initial: "hidden",
  animate: "visible",
  exit: "hidden",
  variants: { hidden: { opacity: 0 }, visible: { opacity: 0.7 } },
  transition: { duration: 0.5 },
};
