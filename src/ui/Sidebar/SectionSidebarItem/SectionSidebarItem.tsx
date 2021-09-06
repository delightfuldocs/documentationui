import classNames from "classnames";
import React from "react";

export type SectionSidebarItem = {
  type: "section";
  url: string;
  label: string;
  depth?: number;
};

export type SectionSidebarItemProps = Omit<SectionSidebarItem, "type">;

export const SectionSidebarItem = ({
  url,
  label,
  depth = 0,
}: SectionSidebarItemProps) => {
  const classes = {
    container: classNames(
      "sidebar-item",
      "sidebar-item--section",
      `sidebar-item--depth-${depth}`
    ),
    link: "sidebar-item__link",
    label: "sidebar-item__label",
  };

  return (
    <li className={classes.container}>
      <a href={url} className={classes.link} title={label}>
        <span className={classes.label}>{label}</span>
      </a>
    </li>
  );
};
