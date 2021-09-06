import React from "react";

export const CollapsibleSection = ({
  title,
  children,
  open = false,
}: {
  title: string;
  children: React.ReactNode;
  open?: boolean;
}) => {
  return (
    <details className="collapsible-section" open={open}>
      <summary className="collapsible-section__title">{title}</summary>
      <div className="collapsible-section__body">{children}</div>
    </details>
  );
};
