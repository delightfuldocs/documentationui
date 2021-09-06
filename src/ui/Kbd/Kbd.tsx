import classNames from "classnames";
import React from "react";
import ReactTooltip from "react-tooltip";

// TODO: Handle keys for different OSes
// TODO: Add "showTooltip" option
// TODO: Let users toggle the OS / format
// TODO: Add "synonyms" for each key -> Look at Brett Terpstra's code
// TODO: Sort keys according to Apple's guidelines

const SPECIAL_KEYS = [
  {
    icon: "⌘",
    text: "Command",
  },
  {
    icon: "⌥",
    text: "Option",
  },
  {
    icon: "⇧",
    text: "Shift",
  },
  {
    icon: "⎇",
    text: "Alt",
  },
];

type KbdFormat = "icon" | "text";

export const Kbd = ({
  children,
  format = "text",
}: {
  children: string;
  format?: KbdFormat;
}) => {
  const { icon, text } = normalizeKey(children);

  const key = format === "text" ? text : icon;
  const tooltip = format === "text" ? icon : text;

  return (
    <span className="kbd-container">
      <kbd className={classNames("kbd", `kbd--${format}`)} data-tip={tooltip}>
        {key}
      </kbd>
      <ReactTooltip place="bottom" type="dark" effect="solid" />
    </span>
  );
};

const normalizeKey = (key: string) => {
  const specialKey = SPECIAL_KEYS.find(({ icon, text }) => {
    switch (key) {
      case icon:
        return true;
      case text:
        return true;
      default:
        return false;
    }
  });

  if (!specialKey) {
    return {
      icon: key,
      text: key,
    };
  }

  return specialKey;
};
