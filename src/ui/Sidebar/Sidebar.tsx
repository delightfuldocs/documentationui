import React, { useState } from "react";
import { SidebarItem } from "./SidebarItem/SidebarItem";
import {
  SidebarHeader,
  SidebarHeaderProps,
} from "./SidebarHeader/SidebarHeader";

// TODO: Override "a" component
// TODO: Assign an ID to all sidebar items
// TODO: Control which items are open from Sidebar component
// TODO: Let users toggle all open/closed
// TODO: Replace "children" with "items"?

export const Sidebar = ({
  items,
  header,
}: {
  items: SidebarItem[];
  header?: SidebarHeaderProps;
}) => {
  return (
    <div className="sidebar">
      {header ? <SidebarHeader {...header} /> : null}
      <ul className="sidebar__items">
        {items.map((item) => (
          <SidebarItem {...item} />
        ))}
      </ul>
    </div>
  );
};
