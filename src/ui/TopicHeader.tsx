import React from "react";
import { Badge, BadgeList } from "./Badges";

export const TopicHeader = ({
  title,
  subtitle,
  badges,
}: {
  title: string;
  subtitle?: string;
  badges?: Badge[];
}) => {
  return (
    <div className="content-header">
      <Title text={title} />
      {subtitle ? <Subtitle text={subtitle} /> : null}
      {badges ? <BadgeList badges={badges} /> : null}
    </div>
  );
};

const Title = ({ text }: { text: string }) => {
  return <h1 className="content-header__title">{text}</h1>;
};

const Subtitle = ({ text }: { text: string }) => {
  return <h2 className="content-header__subtitle">{text}</h2>;
};
