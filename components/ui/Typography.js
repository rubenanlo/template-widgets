import clsx from "clsx";

export const Typography = ({ className, children }) => {
  return (
    <div className={clsx(className, "text-zinc-500 dark:text-gray-200")}>
      {children}
    </div>
  );
};

Typography.Title = function TypographyTitle({ as, title, className, props }) {
  const Component = as ?? "h1";

  const variants = {
    h1: "text-4xl font-bold tracking-tight sm:text-5xl",
    h2: "text-2xl font-bold ",
  };

  return (
    <Component className={clsx(className, variants[as])} {...props}>
      {title}
    </Component>
  );
};

Typography.Paragraph = function TypographyParagraph({
  paragraph,
  children,
  className,
  ...props
}) {
  return (
    <p className={clsx(className)} {...props}>
      {paragraph || children}
    </p>
  );
};
