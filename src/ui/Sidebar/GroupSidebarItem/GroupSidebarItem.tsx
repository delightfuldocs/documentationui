import classNames from "classnames";
import React, { useState } from "react";

import { SidebarItem } from "../SidebarItem/SidebarItem";

export type GroupSidebarItem = {
  type: "group";
  label: string;
  children: SidebarItem[];
  url?: string;
  depth?: number;
};

export type GroupSidebarItemProps = Omit<GroupSidebarItem, "type">;

const GroupDepthZero = ({
  label,
  url,
  children,
  depth = 0,
}: GroupSidebarItemProps) => {
  return (
    <li className="sidebar-item sidebar-item--group sidebar-item--depth-0">
      <div className="sidebar-item__label">{label}</div>
      <ul className="sidebar-item__children">
        {children.map((child) => (
          <SidebarItem {...child} depth={depth + 1} />
        ))}
      </ul>
    </li>
  );
};

const GroupDepthOne = ({
  label,
  url,
  children,
  depth = 0,
}: GroupSidebarItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const classes = {
    container: classNames(
      "sidebar-item",
      "sidebar-item--group",
      "sidebar-item--depth-1",
      isOpen ? "sidebar-item--open" : "sidebar-item--closed"
    ),
  };

  return (
    <li className={classes.container}>
      <div className="sidebar-item__label-with-icon" onClick={handleClick}>
        <div className="sidebar-item__label">{label}</div>
        <div className="sidebar-item__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      {isOpen ? (
        <ul className="sidebar-item__children">
          {children.map((child) => (
            <SidebarItem {...child} depth={depth + 1} />
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export const GroupSidebarItem = (props: GroupSidebarItemProps) => {
  switch (props.depth) {
    case 0:
      return <GroupDepthZero {...props} />;
    case 1:
      return <GroupDepthOne {...props} />;
  }

  throw new Error(`Invalid depth: ${props.depth}`);

  // if (depth === 1) {
  //   const [isOpen, setIsOpen] = useState(false);

  //   const handleClick = () => {
  //     setIsOpen(!isOpen);
  //   };

  //   return (
  //     <li
  //       className={`sidebar-item group-sidebar-item group-sidebar-item--depth-${depth}`}
  //     >
  //       <div
  //         className="group-sidebar-item__link sidebar-item__link"
  //         onClick={handleClick}
  //       >
  //         <div className="group-sidebar-item__label">{label}</div>
  //         <div>
  //           {isOpen ? (
  //             <svg
  //               xmlns="http://www.w3.org/2000/svg"
  //               className="group-sidebar-item__icon"
  //               fill="none"
  //               viewBox="0 0 24 24"
  //               stroke="currentColor"
  //             >
  //               <path
  //                 stroke-linecap="round"
  //                 stroke-linejoin="round"
  //                 stroke-width="2"
  //                 d="M19 9l-7 7-7-7"
  //               />
  //             </svg>
  //           ) : (
  //             <svg
  //               xmlns="http://www.w3.org/2000/svg"
  //               className="group-sidebar-item__icon"
  //               fill="none"
  //               viewBox="0 0 24 24"
  //               stroke="currentColor"
  //             >
  //               <path
  //                 stroke-linecap="round"
  //                 stroke-linejoin="round"
  //                 stroke-width="2"
  //                 d="M9 5l7 7-7 7"
  //               />
  //             </svg>
  //           )}
  //         </div>
  //       </div>
  //       {isOpen ? (
  //         <ul className="group-sidebar-item__children">
  //           {children.map((child) => {
  //             if (child.type === "group") {
  //               return <SidebarItem {...child} depth={depth + 1} />;
  //             }

  //             return <SidebarItem {...child} />;
  //           })}
  //         </ul>
  //       ) : null}
  //     </li>
  //   );
  // }

  // throw new Error("Invalid depth for GroupSidebarItem");
};
