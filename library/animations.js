import tailwindConfig from "@/tailwind.config.js";
import resolveConfig from "tailwindcss/resolveConfig";

const {
  theme: { colors },
} = resolveConfig(tailwindConfig);

// This is a collection of animations that are used throughout the app

// Goes with animatePresence hook
export const showUp = {
  initial: "hidden",
  animate: "visible",
  exit: "hidden",
  variants: { hidden: { opacity: 0 }, visible: { opacity: 0.8 } },
  transition: { duration: 0.5 },
};

export const rotate = (display) => {
  const original = {
    rotate: "0deg",
  };
  const rotated = {
    rotate: "90deg",
    transition: {
      duration: 0.3,
    },
  };
  return display ? { animate: rotated } : { animate: original };
};

// Goes with WidgetsLayout component. This controls the main container which
// changes from a triangle to a full container where the widgets go
export const toggleWidget = (isWidgetsOn) => {
  const hidden = {
    position: "fixed",
    right: "20px",
    marginTop: "1.2rem",
    width: "2rem",
    height: "2rem",
    borderLeft: "1rem solid transparent",
    borderRight: "1rem solid transparent",
    borderTop: `1.5rem solid ${colors.foreground}`,
  };
  const visible = {
    position: "fixed",
    insetY: 0,
    right: 0,
    marginTop: "0rem",
    marginRight: "0rem",
    height: "100%",
    width: "24rem",
    overflow: "hidden",
    backgroundColor: [colors.foreground, colors.background],
    paddingTop: "4rem",
    transition: {
      duration: 0.3,
    },
  };
  return isWidgetsOn ? { animate: visible } : { animate: hidden };
};

export const wordCarousel = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 },
};

export const fromTop = {
  initial: {
    height: "0rem",
    position: "relative",
    marginTop: 0,
    opacity: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
  animate: {
    height: "20rem",
    position: "relative",
    marginTop: "1.5rem",
    opacity: 1,
    paddingTop: "1rem",
    paddingBottom: "1rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
  exit: {
    height: 0,
    position: "relative",
    marginTop: 0,
    opacity: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
  transition: { duration: 0.5 },
};
