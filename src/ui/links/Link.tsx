import React from "react";
import classnames from "classnames";

export const Link = ({
  url,
  children,
  className,
}: {
  url: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <a href={url} className={classnames("link", className)}>
      {children}
    </a>
  );
};
