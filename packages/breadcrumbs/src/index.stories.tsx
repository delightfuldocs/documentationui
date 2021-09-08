import "../styles.css";
import { Breadcrumbs } from "./index";
import React from "react";

export default {
  component: Breadcrumbs,
  title: "Breadcrumbs",
};

export const BasicBreadcrumbs = (): JSX.Element => {
  return (
    <Breadcrumbs
      items={[
        {
          url: "#",
          label: "Canva Apps",
        },
        {
          url: "#",
          label: "v1",
        },
        {
          url: "#",
          label: "Content extensions",
        },
        {
          url: "#",
          label: "Grid",
        },
      ]}
    />
  );
};
