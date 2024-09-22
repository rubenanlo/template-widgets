import clsx from "clsx";

export const Button = ({
  variant = "default",
  className,
  children,
  ...props
}) => {
  const variants = {
    tag: "absolute right-0 h-8 w-5 rounded-2xl rounded-br-none rounded-tr-none border-y border-l border-white/50",
    default: "",
  };
  const classNameProps = clsx(className, variants[variant]);

  return (
    <button className={classNameProps} {...props}>
      {children}
    </button>
  );
};
