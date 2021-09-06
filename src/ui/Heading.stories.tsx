import React from "react";
import { H1, H2, H3, H4 } from "./Heading";

export default {
  title: "Heading",
};

export const BasicHeadings = () => {
  return (
    <div>
      <H1>Create an app via the Developer Portal</H1>
      <H2>Create an app via the Developer Portal</H2>
      <H3>Create an app via the Developer Portal</H3>
      <H4>Create an app via the Developer Portal</H4>
    </div>
  );
};

export const HeadingWithStepNumberPrefix = () => {
  return (
    <div>
      <H1 step={1}>Create an app via the Developer Portal</H1>
      <H2 step={1}>Create an app via the Developer Portal</H2>
      <H3 step={1}>Create an app via the Developer Portal</H3>
      <H4 step={1}>Create an app via the Developer Portal</H4>
    </div>
  );
};

export const HeadingWithOptionalPrefix = () => {
  return (
    <div>
      <H1 optional>Create an app via the Developer Portal</H1>
      <H2 optional>Create an app via the Developer Portal</H2>
      <H3 optional>Create an app via the Developer Portal</H3>
      <H4 optional>Create an app via the Developer Portal</H4>
    </div>
  );
};

export const HeadingWithBadge = () => {
  return (
    <div>
      <H1 badge={{ color: "indigo-500", text: "Hello world" }}>
        Create an app via the Developer Portal
      </H1>
      <H2 badge={{ color: "indigo-500", text: "Hello world" }}>
        Create an app via the Developer Portal
      </H2>
      <H3 badge={{ color: "indigo-500", text: "Hello world" }}>
        Create an app via the Developer Portal
      </H3>
      <H4 badge={{ color: "indigo-500", text: "Hello world" }}>
        Create an app via the Developer Portal
      </H4>
    </div>
  );
};
