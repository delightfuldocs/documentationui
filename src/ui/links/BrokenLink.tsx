import React from "react";
import { Link } from "./Link";

export const BrokenLink = ({
  url,
  children,
}: {
  url: string;
  children: React.ReactNode;
}) => {
  return (
    <Link url={url} className="link--broken">
      {children}
    </Link>
  );
};
