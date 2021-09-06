import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

// Inspiration: https://ped.ro/blog/code-blocks-but-better

export const CodeBlock = ({
  code,
}: {
  code: string | { label: string; code: string }[];
}) => {
  if (Array.isArray(code)) {
    return (
      <Tabs>
        <TabList>
          {code.map((item) => (
            <Tab>{item.label}</Tab>
          ))}
        </TabList>
        {code.map((item) => (
          <TabPanel>
            <div className="code-block">
              <pre>
                <code>{item.code}</code>
              </pre>
            </div>
          </TabPanel>
        ))}
      </Tabs>
    );
  }

  return (
    <div className="code-block">
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
};
