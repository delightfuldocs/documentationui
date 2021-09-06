import React from "react";
import { TableOfContents } from "./TableOfContents";

export default {
  title: "TableOfContents",
};

export const TableOfContentsWithoutItems = () => {
  return <TableOfContents title="On this page" items={[]} />;
};

export const TableOfContentsWithoutActiveItem = () => {
  return (
    <TableOfContents
      title="On this page"
      items={[
        { id: "#set-up-a-web-server", label: "Set up a web server" },
        { id: "#create-an-app", label: "Create an app" },
        {
          id: "#add-an-extension-to-the-app",
          label: "Add an extension to the app",
        },
        { id: "#preview-the-extension", label: "Preview the extension" },
        { id: "#next-steps", label: "Next steps" },
      ]}
    />
  );
};

export const TableOfContentsWithActiveItem = () => {
  return (
    <TableOfContents
      title="On this page"
      activeId="add-an-extension-to-the-app"
      items={[
        { id: "#set-up-a-web-server", label: "Set up a web server" },
        { id: "#create-an-app", label: "Create an app" },
        {
          id: "#add-an-extension-to-the-app",
          label: "Add an extension to the app",
        },
        { id: "#preview-the-extension", label: "Preview the extension" },
        { id: "#next-steps", label: "Next steps" },
      ]}
    />
  );
};
