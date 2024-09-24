import tailwindConfig from "@/tailwind.config.js";
import resolveConfig from "tailwindcss/resolveConfig";

const {
  theme: { colors },
} = resolveConfig(tailwindConfig);

// Goes with animatePresence hook
export const showUp = {
  initial: "hidden",
  animate: "visible",
  exit: "hidden",
  variants: { hidden: { opacity: 0 }, visible: { opacity: 0.8 } },
  transition: { duration: 0.5 },
};

// Goes with WidgetsToggle component
export const toggleWidget = (isWidgetsOn) => {
  const hidden = {
    position: "absolute",
    right: "20px",
    marginTop: "1.2rem",
    width: "2rem",
    height: "2rem",
    borderLeft: "1rem solid transparent",
    borderRight: "1rem solid transparent",
    borderTop: `1.5rem solid ${colors.foreground}`,
    zIndex: 10,
  };
  const visible = {
    position: "fixed",
    insetY: 0,
    right: 0,
    marginTop: "0rem",
    marginRight: "0rem",
    height: "100%",
    width: "24rem",
    overflow: "auto",
    backgroundColor: [colors.foreground, colors.background],
    paddingTop: "4rem",
    zIndex: 10,
    transition: {
      duration: 0.3,
    },
  };
  return isWidgetsOn ? { animate: visible } : { animate: hidden };
};
