import React from "react";
import { CollapsibleSection } from "./CollapsibleSection";

export default {
  title: "CollapsibleSection",
};

export const BasicCollapsibleSection = () => {
  return (
    <CollapsibleSection title="Hello world">
      This is some content.
    </CollapsibleSection>
  );
};

export const OpenCollapsibleSection = () => {
  return (
    <CollapsibleSection title="Hello world" open>
      This is some content.
    </CollapsibleSection>
  );
};
