import React from "react";
import { Breadcrumbs } from "./index";
import "../styles.css";

export default {
  component: Breadcrumbs,
  title: "Breadcrumbs",
};

export const PrimaryBreadcrumbs = () => {
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
