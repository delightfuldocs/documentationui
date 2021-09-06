import React from "react";
import { Sidebar } from "./Sidebar";

export default {
  title: "Sidebar",
};

export const BasicSidebar = () => {
  return (
    <Sidebar
      items={[
        {
          type: "group",
          label: "Getting started",
          children: [
            {
              type: "internal",
              url: "#",
              label: "Overview",
            },
            {
              type: "internal",
              url: "#",
              label: "Quick start",
            },
            {
              type: "internal",
              url: "#",
              label: "Changelog",
            },
          ],
        },

        {
          type: "group",
          label: "Concepts",
          children: [
            {
              type: "group",
              label: "Apps",
              children: [
                {
                  type: "internal",
                  url: "#",
                  label: "Public apps",
                },
              ],
            },
            {
              type: "internal",
              url: "#",
              label: "Extensions",
            },
            {
              type: "internal",
              url: "#",
              label: "Regions",
            },
          ],
        },
        {
          type: "group",
          label: "Extension points",
          children: [
            {
              type: "section",
              url: "#",
              label: "Content",
            },
            {
              type: "section",
              url: "#",
              label: "Editing",
            },
            {
              type: "section",
              url: "#",
              label: "Publish",
            },
          ],
        },
        {
          type: "group",
          label: "Reference",
          children: [
            {
              type: "external",
              url: "#",
              label: "Helpdesk",
            },
          ],
        },
      ]}
    />
  );
};
