import classNames from "classnames";
import React, { useState } from "react";

type TableOfContentsProps = {
  title: string;
  items: { id: string; label: string }[];
  activeId?: string;
};

export const TableOfContents = ({
  title = "On this page",
  items,
  activeId,
}: TableOfContentsProps) => {
  if (!items || !Array.isArray(items) || items.length < 1) {
    return null;
  }

  return (
    <div className="table-of-contents">
      <div className="table-of-contents__title">{title}</div>
      <ul className="table-of-contents__list">
        {items.map(({ id, label }) => (
          <TableOfContentsItem activeId={activeId} id={id} label={label} />
        ))}
      </ul>
    </div>
  );
};

const TableOfContentsItem = ({
  activeId,
  id,
  label,
}: {
  activeId?: string;
  id: string;
  label: string;
}) => {
  const isActive = activeId && id.endsWith(activeId);
  const idWithHash = id.startsWith("#") ? id : "#" + id;
  return (
    <li className="table-of-contents__item">
      <a
        href={idWithHash}
        className={classNames(
          "table-of-contents__link",
          isActive ? "table-of-contents__link--active" : null
        )}
      >
        {label}
      </a>
    </li>
  );
};
