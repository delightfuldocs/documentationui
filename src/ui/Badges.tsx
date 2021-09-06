import React from "react";
import classnames from "classnames";

export type Badge = {
  color: string;
  text: string;
  icon?: string;
  url?: string;
};

export const BadgeList = ({ badges }: { badges: Badge[] }) => {
  return (
    <div className="badge-list">
      {badges.map((badge) => (
        <Badge {...badge} />
      ))}
    </div>
  );
};

export const Badge = ({
  color,
  text,
  icon,
  url,
}: {
  color: string;
  text: string;
  icon?: string;
  url?: string;
}) => {
  return <span className="badge">{text}</span>;
};
