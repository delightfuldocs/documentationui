import React from "react";
import classNames from "classnames";

export type Breadcrumbs = {
  items: Breadcrumb[];
};

export const Breadcrumbs = ({ items }: Breadcrumbs): JSX.Element | null => {
  if (!items || !Array.isArray(items) || items.length < 1) {
    return null;
  }

  const children: React.ReactNode[] = [];

  items.forEach((item, index, items) => {
    const isLast = items.length - 1 === index;

    children.push(
      <Breadcrumb url={item.url} label={item.label} active={isLast} />
    );

    if (!isLast) {
      children.push(<BreadcrumbSeparator />);
    }
  });

  return (
    <nav className="breadcrumbs">
      <ol className="breadcrumbs__list">
        <CollapsedBreadcrumb />
        <BreadcrumbSeparator />
        {children}
      </ol>
    </nav>
  );
};

type Breadcrumb = {
  url: string;
  label: string;
  active?: boolean;
};

const Breadcrumb = ({ url, label, active }: Breadcrumb) => {
  const classes = {
    container: classNames("breadcrumb", active ? "breadcrumb--active" : null),
    link: classNames("breadcrumb__link"),
    label: classNames("breadcrumb__label"),
  };

  return (
    <li className={classes.container}>
      <a href={url} className={classes.link}>
        <span className={classes.label}>{label}</span>
      </a>
    </li>
  );
};

const BreadcrumbSeparator = () => {
  return (
    <li className="breadcrumb breadcrumb--separator" aria-hidden="true">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="breadcrumb__icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </li>
  );
};

const CollapsedBreadcrumb = () => {
  return (
    <li className="breadcrumb breadcrumb--collapsed">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="breadcrumb__icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
        />
      </svg>
    </li>
  );
};
