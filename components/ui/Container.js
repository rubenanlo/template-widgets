import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import { motion } from "framer-motion";
import clsx from "clsx";
import { Show } from "@/components/ui/Show";
import images from "@/public/images.json";

export const Container = ({ children, as, className, ...props }) => {
  let Component = as ?? "div";

  return (
    <Component className={clsx(className)} {...props}>
      {children}
    </Component>
  );
};

Container.Animated = function ContainerAnimated({
  children,
  className,
  ...props
}) {
  return (
    <motion.div className={clsx(className)} {...props}>
      {children}
    </motion.div>
  );
};

Container.Flex = function ContainerFlex({ as, children, className, ...props }) {
  let Component = as ?? "div";

  return (
    <Component className={clsx(className, "flex")} {...props}>
      {children}
    </Component>
  );
};

Container.Image = function ContainerImage({
  className,
  name,
  variant = "default",
}) {
  const variants = {
    post: "w-[80%] mx-auto rounded-2xl shadow-2xl opacity-60",
    default: "",
  };

  const { format, ...restPropsImage } =
    images.find(({ alt }) => alt === name) || {};

  const [imageSrc, setImageSrc] = useState(restPropsImage);
  const [isFallback, setIsFallback] = useState(false);

  // on error, we only need to change the src from the cloudinary id to a
  // relative path. Ensure that babel has this alias, and that all images are
  // saved in one directory
  const handleError = () => {
    if (isFallback) return;
    setIsFallback(true);
    setImageSrc({
      ...restPropsImage,
      src: `/assets/${name}.${format}`,
    });
  };

  // Switching component based on whether the image is available on cloudinary
  let Component = isFallback ? Image : CldImage;

  return (
    <Show isTrue={[name]}>
      <Component
        className={clsx(className, variants[variant])}
        {...imageSrc}
        onError={handleError}
      />
    </Show>
  );
};

Container.Link = function ContainerLink({
  children,
  className,
  href,
  ...props
}) {
  return (
    <Link href={href} className={clsx(className, "cursor-pointer")} {...props}>
      {children}
    </Link>
  );
};
