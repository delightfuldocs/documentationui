import React from "react";
import { Link } from "../links/Link";

export type Breadcrumb = {
  url: string;
  label: string;
};

export const Breadcrumbs = ({ items }: { items: Breadcrumb[] }) => {
  if (!items || !Array.isArray(items) || items.length < 1) {
    return null;
  }

  return (
    <ul className="breadcrumbs">
      {items.map((item) => (
        <Breadcrumb url={item.url} label={item.label} />
      ))}
    </ul>
  );
};

const Breadcrumb = ({ label, url }: { label: string; url: string }) => {
  return (
    <li className="breadcrumb">
      <Link url={url} className="breadcrumb__link">
        <span className="breadcrumb__text">{label}</span>
      </Link>
    </li>
  );
};
