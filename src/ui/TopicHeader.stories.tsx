import React from "react";
import { TopicHeader } from "./TopicHeader";

export default {
  title: "TopicHeader",
};

export const TopicHeaderWithTitle = () => {
  return <TopicHeader title="Hello World" />;
};

export const TopicHeaderWithSubtitle = () => {
  return (
    <TopicHeader title="Hello World" subtitle="Getting started with React." />
  );
};

export const TopicHeaderWithBadge = () => {
  return (
    <TopicHeader
      title="Hello World"
      badges={[{ text: "Updated 3 days ago", color: "indigo-500" }]}
    />
  );
};

export const TopicHeaderWithMultipleBadges = () => {
  return (
    <TopicHeader
      title="Hello World"
      badges={[
        { text: "Beginner", color: "green-500" },
        { text: "Updated 3 days ago", color: "indigo-500" },
      ]}
    />
  );
};

export const TopicHeaderWithSubtitleAndBadge = () => {
  return (
    <TopicHeader
      title="Hello World"
      subtitle="Getting started with React."
      badges={[{ text: "Updated 3 days ago", color: "indigo-500" }]}
    />
  );
};
