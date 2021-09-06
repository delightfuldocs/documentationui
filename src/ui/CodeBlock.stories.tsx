import React from "react";
import { CodeBlock } from "./CodeBlock";
import { CodeBlockPreview } from "./CodeBlockPreview";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default {
  title: "CodeBlock",
};

export const CodeBlockWithOneLine = () => {
  return <CodeBlock code='const variable = "hello";' />;
};

export const CodeBlockWithMultipleLines = () => {
  return (
    <CodeBlock
      code={`const variable = "hello";
const variable = "world";`}
    />
  );
};

export const CodeBlockWithPreview = () => {
  return (
    <>
      <CodeBlockPreview>
        <div>This is a preview.</div>
      </CodeBlockPreview>
      <CodeBlock code='const variable = "hello";' />
    </>
  );
};

export const CodeBlockWithTabs = () => {
  return (
    <CodeBlock
      code={[
        {
          label: "npm",
          code: "npm install react-tabs --dev",
        },
        {
          label: "yarn",
          code: "yarn add react-tabs",
        },
      ]}
    />
  );
};
