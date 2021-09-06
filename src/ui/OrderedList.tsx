import React from "react";

export const OrderedList = ({ children }: { children: React.ReactNode }) => {
  return <ol>{children}</ol>;
};

export const OrderedListItem = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <li className="list-decimal">{children}</li>;
};
