import React from "react";

export type SidebarHeaderProps = {
  title: string;
  icon?: React.ReactNode;
};

export const SidebarHeader = ({ title, icon }: SidebarHeaderProps) => {
  return (
    <div className="sidebar-header">
      {icon ? <div className="sidebar-header__icon">{icon}</div> : null}
      <div className="sidebar-header__title">{title}</div>
    </div>
  );
};

// export const SidebarHeader = ({
//   url,
//   label,
//   description,
// }: SidebarHeaderProps) => {
//   return (
//     <div className="sidebar-header">
//       <a href={url} className="sidebar-header__link sidebar-item__link">
//         <span className="sidebar-header__label">{label}</span>
//       </a>
//       {description ? (
//         <div className="sidebar-header__description">{description}</div>
//       ) : null}
//     </div>
//   );
// };
