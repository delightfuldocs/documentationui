import React from "react";
import { Breadcrumbs } from "./Breadcrumbs";

export default {
  title: "Breadcrumbs",
};

export const BreadcrumbsWithoutItems = () => {
  return <Breadcrumbs items={[]} />;
};

export const BreadcrumbsWithItems = () => {
  return (
    <Breadcrumbs
      items={[
        {
          url: "#",
          label: "Canva Developers",
        },
        {
          url: "#",
          label: "Apps",
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
          label: "Overview",
        },
      ]}
    />
  );
};
