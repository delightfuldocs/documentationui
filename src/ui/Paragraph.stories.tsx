import React from "react";
import { Paragraph } from "./Paragraph";

export default {
  title: "Paragraph",
};

export const BasicParagraph = () => {
  return (
    <Paragraph>
      React has been designed from the start for gradual adoption, and{" "}
      <strong>you can use as little or as much React as you need</strong>.
      Whether you want to get a taste of React, add some interactivity to a
      simple HTML page, or start a complex React-powered app, the links in this
      section will help you get started.
    </Paragraph>
  );
};
