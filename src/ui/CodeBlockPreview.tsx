import React from "react";

export const CodeBlockPreview = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="code-block-preview">{children}</div>;
};
