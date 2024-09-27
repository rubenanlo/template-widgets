import clsx from "clsx";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

export function Post({ as, className, children, ...props }) {
  let Component = as ?? "div";

  return (
    <Component
      className={clsx(
        className,
        "group relative flex w-full flex-col items-start",
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

Post.Title = function PostTitle({ as, href, title, className }) {
  let Component = as ?? "h1";

  return (
    <Component
      className={clsx(
        className,
        "text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100",
      )}
    >
      {href ? <Post.Link href={href}>{title}</Post.Link> : title}
    </Component>
  );
};

Post.Description = function PostDescription({ className, text, ...props }) {
  const classNameProp = className;

  return (
    <p
      className={clsx(
        classNameProp,
        "relative mt-2 text-sm text-zinc-600 dark:text-zinc-400",
      )}
      {...props}
    >
      {text}
    </p>
  );
};

Post.Cta = function PostCta({ text, noChevron }) {
  return (
    <div
      aria-hidden="true"
      className="text-orange-tertiary relative mt-4 flex text-sm font-medium"
    >
      {text}
      {noChevron ? null : (
        <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
      )}
    </div>
  );
};
