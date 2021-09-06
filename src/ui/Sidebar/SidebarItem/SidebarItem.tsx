import React from "react";

import { InternalSidebarItem } from "../InternalSidebarItem/InternalSidebarItem";
import { ExternalSidebarItem } from "../ExternalSidebarItem/ExternalSidebarItem";
import { GroupSidebarItem } from "../GroupSidebarItem/GroupSidebarItem";
import { SectionSidebarItem } from "../SectionSidebarItem/SectionSidebarItem";

export type SidebarItem =
  | InternalSidebarItem
  | ExternalSidebarItem
  | GroupSidebarItem
  | SectionSidebarItem;

export const SidebarItem = (props: SidebarItem) => {
  switch (props.type) {
    case "internal":
      return <InternalSidebarItem {...props} />;
    case "external":
      return <ExternalSidebarItem {...props} />;
    case "group":
      return <GroupSidebarItem {...props} />;
    case "section":
      return <SectionSidebarItem {...props} />;
    default:
      throw new Error(`Unreachable error`);
  }
};

// export const SidebarItem =  {
//   Internal: InternalSidebarItem
// }
