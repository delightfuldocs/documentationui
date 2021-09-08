import "../styles.css";
import clsx from "clsx";
import React from "react";
import useScreenSize from "use-screen-size";

export type Breadcrumb = {
  url: string;
  label: string;
  active?: boolean;
};

export type Breadcrumbs = {
  items: Breadcrumb[];
};

export const Breadcrumbs = ({ items }: Breadcrumbs): JSX.Element | null => {
  if (!items || !Array.isArray(items) || items.length < 1) {
    console.warn("There's no items passed into the Breadcrumbs component");
    return null;
  }

  const { screen } = useScreenSize();

  if (screen === "xs" || screen === "s") {
    const item = items[items.length - 1];

    const classes = {
      container: "mobile-breadcrumb",
      icon: "mobile-breadcrumb__icon",
      link: "mobile-breadcrumb__link",
      label: "mobile-breadcrumb__label",
    };

    // TODO: This is really just a button with an icon

    return (
      <div className={classes.container}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={classes.icon}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <a href={item.url} className={classes.link} title={item.label}>
          <span className={classes.label}>{item.label}</span>
        </a>
      </div>
    );
  }

  const classes = {
    container: "breadcrumbs",
    list: "breadcrumbs__list",
  };

  return (
    <nav className={classes.container}>
      <ol className={classes.list}>
        {items.flatMap((item, index, items) => {
          const isLastItem = items.length - 1 === index;
          return [
            <Breadcrumb {...item} active={isLastItem} key={item.url} />,
            isLastItem ? null : <Separator />,
          ];
        })}
      </ol>
    </nav>
  );
};

const Breadcrumb = ({ url, label, active }: Breadcrumb) => {
  const classes = {
    container: clsx(
      "breadcrumb",
      active ? "breadcrumb--active" : "breadcrumb--inactive"
    ),
    link: "breadcrumb__link",
    label: "breadcrumb__label",
  };

  return (
    <>
      <li className={classes.container}>
        <a href={url} className={classes.link} title={label}>
          <span className={classes.label}>{label}</span>
        </a>
      </li>
    </>
  );
};

const Separator = () => {
  const classes = {
    container: "breadcrumb-separator",
    icon: "breadcrumb-separator__icon",
  };

  return (
    <li className={classes.container} aria-hidden="true">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={classes.icon}
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
