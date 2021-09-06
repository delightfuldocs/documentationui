import React from "react";
import { TopicHeader } from "./TopicHeader";
import { Feedback } from "./Feedback";

export const Topic = ({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="content">
      <TopicHeader title={title} subtitle={subtitle} />
      <div className="content-body">{children}</div>
      <Feedback />
    </div>
  );
};
