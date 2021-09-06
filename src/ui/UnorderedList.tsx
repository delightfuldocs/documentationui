import React from "react";

export const UnorderedList = ({ children }: { children: React.ReactNode }) => {
  return <ul className="unordered-list">{children}</ul>;
};

export const ListItem = ({ children }: { children: React.ReactNode }) => {
  return <li className="list-item">{children}</li>;
};
