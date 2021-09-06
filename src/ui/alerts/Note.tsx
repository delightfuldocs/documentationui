import classnames from "classnames";
import React from "react";
import { Alert } from "./Alert";

type NoteProps = {
  title?: string;
  showIcon?: boolean;
  children: React.ReactNode;
};

export const Note = ({ title, showIcon, children }: NoteProps) => {
  return (
    <Alert
      title={title}
      showIcon={showIcon}
      type="note"
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      }
    >
      {children}
    </Alert>
  );
};
