import React, { useState } from "react";
import { FullScreenMenu, MobileMenu } from "./FullScreenMenu";

// const FullScreenMenu = () => {}
// const FullScreenSidebar = () => {}

export const Navbar = ({ url, title }: { title: string; url?: string }) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMenuButtonClick = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleClose = () => {
    setMobileMenu(false);
  };

  return (
    <div className="navbar">
      <SidebarButton />
      <Logo url={url} title={title} />
      <MenuButton onClick={handleMenuButtonClick} />
      {mobileMenu ? <MobileMenu onClose={handleClose} /> : null}
      {/* <FullScreenMenu onClose={handleClose} isFullScreen={mobileMenu} /> */}
    </div>
  );
};

const Logo = ({ url, title }: { url?: string; title: string }) => {
  if (url) {
    return (
      <div className="navbar__logo">
        <a href={url}>{title}</a>
      </div>
    );
  }

  return (
    <div className="navbar__logo">
      <span>{title}</span>
    </div>
  );
};

const SidebarButton = ({ onClick }: { onClick?: React.MouseEventHandler }) => {
  return (
    <button className="navbar__icon-wrapper" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="navbar__icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  );
};

const MenuButton = ({ onClick }: { onClick?: React.MouseEventHandler }) => {
  return (
    <button className="navbar__icon-wrapper" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="navbar__icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
        />
      </svg>
    </button>
  );
};
