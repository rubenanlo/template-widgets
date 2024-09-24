import { Children } from "react";
import { AnimatePresence } from "framer-motion";

// This component handles the conditional rendering of children based on the `isTrue` prop.
// It supports two scenarios: short-circuit rendering and ternary conditional rendering.

// 1. Short-circuit rendering: This is the default behavior. The `isTrue` prop
//    accepts a boolean value. If false, the component renders nothing, ensuring
//    no empty HTML elements are generated in the DOM.

// 2. Ternary conditional rendering: If you want to use a ternary conditional,
//    you must use the `ternary` prop along with `Show.When` and `Show.Else`.
//    The `isTrue` prop also needs to be a boolean in this case.

// Usage:
// Short-circuit rendering:
// <Show isTrue={true}>
//   <div>Visible</div>
// </Show>
// Ternary conditional rendering:
// <Show ternary>
//   <Show.When isTrue={true}>
//     <div>Visible</div>
//   </Show.When>
//   <Show.Else>
//     <div>Hidden</div>
//   </Show.Else>
// </Show>

export const Show = ({ ternary, isTrue, children, animatePresence }) => {
  if (ternary) return <ShowTernary {...{ isTrue, children }} />;
  if (animatePresence)
    return <ShowShortCircuitAnimated {...{ isTrue, children }} />;
  return <ShowShortCircuit {...{ isTrue, children }} />;
};

/**
 * Short-circuit rendering approach
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.isTrue - A boolean value determining visibility of children.
 * @param {React.ReactNode} props.children - The child elements to be conditionally rendered.
 * @returns {JSX.Element|null} The rendered children if `isTrue` is true; otherwise, null.
 */

const ShowShortCircuit = ({ isTrue, children }) => isTrue && <>{children}</>;

/**
 * Short-circuit rendering with animation support
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.isTrue - A boolean value determining visibility of children.
 * @param {React.ReactNode} props.children - The child elements to be conditionally rendered.
 * @returns {JSX.Element|null} The rendered children wrapped in AnimatePresence if `isTrue` is true; otherwise, null.
 */

const ShowShortCircuitAnimated = ({ isTrue, children }) => (
  <AnimatePresence>{isTrue && children}</AnimatePresence>
);

/**
 * Ternary conditional rendering approach
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child elements to be evaluated.
 * @returns {JSX.Element|null} The rendered child that matches the `isTrue` condition or the default child.
 */

const ShowTernary = (props) => {
  let when = null;
  let otherwise = null;

  Children.forEach(props.children, (child) => {
    if (child.props.isTrue === undefined) {
      otherwise = child;
    } else if (!when && child.props.isTrue === true) {
      when = child;
    }
  });

  return when || otherwise;
};

// Use the below ONLY if you want to use the ternary conditional rendering approach.
Show.When = ({ isTrue, children }) => isTrue && children;
Show.Else = ({ render, children }) => render || children;
