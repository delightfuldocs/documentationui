import React from "react";

export type InternalSidebarItem = {
  type: "internal";
  url: string;
  label: string;
  depth?: number;
};

export type InternalSidebarItemProps = Omit<InternalSidebarItem, "type">;

export const InternalSidebarItem = ({
  url,
  label,
}: InternalSidebarItemProps) => {
  return (
    <li className="sidebar-item sidebar-item--internal">
      <a href={url} className="sidebar-item__link" title={label}>
        <span className="sidebar-item__label">{label}</span>
      </a>
    </li>
  );
};

// export const InternalSidebarItem = ({
//   url,
//   label,
// }: InternalSidebarItemProps) => {
//   return (
//     <li className="sidebar-item internal-sidebar-item">
//       <a href={url} className="internal-sidebar-item__link sidebar-item__link">
//         <span className="internal-sidebar-item__label">{label}</span>
//       </a>
//     </li>
//   );
// };
