import classNames from "classnames";
import React, { useState } from "react";

// TODO: Create a "PrimaryMenu" (sidebar) and "SecondaryMenu" component

const SearchResults = ({
  query,
  results,
}: {
  query?: string;
  results: { title: string; description: string }[];
}) => {
  const hasQuery = query && query.trim().length > 0;

  if (hasQuery) {
    return (
      <div className="search-results">
        {results.map(({ title, description }) => (
          <div>
            <div>{title}</div>
            <div>{description}</div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="search-results search-results--empty">
      The search has focus.
    </div>
  );
};

export const MobileMenu = ({
  onClose,
}: {
  onClose: React.MouseEventHandler;
}) => {
  const [searchHasFocus, setSearchHasFocus] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchFocus = () => {
    setSearchHasFocus(true);
  };

  const handleSearchBlur = () => {
    setSearchHasFocus(false);
  };

  return (
    <div className="mobile-menu">
      <div className="mobile-menu__header">
        <button className="mobile-menu__close-button" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mobile-menu__close-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
      <div className="mobile-menu__content">
        <div className="mobile-menu__search">
          <input
            type="text"
            placeholder="Search the documentation..."
            className="mobile-menu__search-input"
            onFocus={handleSearchFocus}
            onBlur={handleSearchBlur}
            onChange={(event) => {
              setSearchQuery(event.target.value);
            }}
          />
        </div>
        {searchHasFocus ? (
          <SearchResults query={searchQuery} results={[]} />
        ) : (
          <ul className="mobile-menu__items">
            <li className="mobile-menu__item">
              <a href="#" className="mobile-menu__link">
                Developer Portal
              </a>
            </li>
            <li className="mobile-menu__item">
              <a href="#" className="mobile-menu__link">
                Developer Helpdesk
              </a>
            </li>
            <li className="mobile-menu__item">
              <a href="#" className="mobile-menu__link">
                API reference
              </a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export const FullScreenMenu = ({
  onClose,
  isFullScreen,
}: {
  onClose?: React.MouseEventHandler;
  isFullScreen?: boolean;
}) => {
  const [searchHasFocus, setSearchHasFocus] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchFocus = () => {
    setSearchHasFocus(true);
  };

  const handleSearchBlur = () => {
    setSearchHasFocus(false);
  };

  const screen = isFullScreen ? "mobile" : "desktop";
  return (
    <div
      className={classNames(
        `${screen}-menu`,
        searchHasFocus ? `${screen}-menu--search-has-focus` : null
      )}
    >
      <div className={`${screen}-menu__header`}>
        <button className={`${screen}-menu__close-button`} onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${screen}-menu__close-icon`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
      <div className={`${screen}-menu__content`}>
        <div className={`${screen}-menu__search`}>
          <input
            type="text"
            placeholder="Search the documentation..."
            className={`${screen}-menu__search-input`}
            onFocus={handleSearchFocus}
            onBlur={handleSearchBlur}
            onChange={(event) => {
              setSearchQuery(event.target.value);
            }}
          />
          <div className={`${screen}-menu__search-results`}>
            {searchQuery.trim().length > 0 ? (
              <div className={`${screen}-menu__search-results--not-empty`}>
                The search query is {searchQuery}.
              </div>
            ) : (
              <div className={`${screen}-menu__search-results--empty`}>
                The search is focused.
              </div>
            )}
          </div>
        </div>
        <ul className={`${screen}-menu__items`}>
          <li className={`${screen}-menu__item`}>
            <a href="#" className={`${screen}-menu__link`}>
              Developer Portal
            </a>
          </li>
          <li className={`${screen}-menu__item`}>
            <a href="#" className={`${screen}-menu__link`}>
              Developer Helpdesk
            </a>
          </li>
          <li className={`${screen}-menu__item`}>
            <a href="#" className={`${screen}-menu__link`}>
              API reference
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
