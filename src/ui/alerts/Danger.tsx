import classnames from "classnames";
import React from "react";
import { Alert } from "./Alert";

type DangerProps = {
  title?: string;
  showIcon?: boolean;
  children: React.ReactNode;
};

export const Danger = ({ title, showIcon, children }: DangerProps) => {
  return (
    <Alert
      title={title}
      showIcon={showIcon}
      type="danger"
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      }
    >
      {children}
    </Alert>
  );
};
