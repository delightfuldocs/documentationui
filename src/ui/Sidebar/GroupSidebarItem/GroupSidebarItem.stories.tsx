import React from "react";
import { GroupSidebarItem } from "./GroupSidebarItem";

export default {
  title: "Sidebar/GroupSidebarItem",
};

export const GroupWithChildren = () => {
  return (
    <GroupSidebarItem
      label="Concepts"
      children={[
        { type: "internal", label: "Apps", url: "#" },
        { type: "internal", label: "Extensions", url: "#" },
        { type: "internal", label: "Regions", url: "#" },
      ]}
    />
  );
};

export const GroupWithGrandchildren = () => {
  return (
    <GroupSidebarItem
      label="Concepts"
      children={[
        {
          type: "group",
          label: "Apps",
          children: [
            { type: "internal", label: "Public apps", url: "#" },
            { type: "internal", label: "Team apps", url: "#" },
          ],
        },
        { type: "internal", label: "Extensions", url: "#" },
        { type: "internal", label: "Regions", url: "#" },
      ]}
    />
  );
};

export const GroupWithGreatGrandchildren = () => {
  return (
    <GroupSidebarItem
      label="Concepts"
      children={[
        {
          type: "group",
          label: "Apps",
          children: [
            {
              type: "group",
              label: "Public apps",
              children: [
                { type: "internal", label: "Create a public app", url: "#" },
                { type: "internal", label: "Submit a public app", url: "#" },
                { type: "internal", label: "Release a public app", url: "#" },
              ],
            },
            { type: "internal", label: "Team apps", url: "#" },
          ],
        },
        { type: "internal", label: "Extensions", url: "#" },
        { type: "internal", label: "Regions", url: "#" },
      ]}
    />
  );
};
