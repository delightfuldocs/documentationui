import classnames from "classnames";
import React from "react";
import { Alert } from "./Alert";

type TipProps = {
  title?: string;
  showIcon?: boolean;
  children: React.ReactNode;
};

export const Tip = ({ title, showIcon, children }: TipProps) => {
  return (
    <Alert
      title={title}
      showIcon={showIcon}
      type="tip"
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
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      }
    >
      {children}
    </Alert>
  );
};
