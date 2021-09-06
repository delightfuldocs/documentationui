import React from "react";
import { Paragraph } from "../Paragraph";
import { Warning } from "./Warning";

export default {
  title: "Alerts/Warning",
};

export const WarningAlert = () => {
  return (
    <>
      <Warning>
        <Paragraph>
          React has been designed from the start for gradual adoption, and{" "}
          <strong>you can use as little or as much React as you need</strong>.
          Whether you want to get a taste of React, add some interactivity to a
          simple HTML page, or start a complex React-powered app, the links in
          this section will help you get started.
        </Paragraph>
        <Paragraph>
          React has been designed from the start for gradual adoption, and{" "}
          <strong>you can use as little or as much React as you need</strong>.
          Whether you want to get a taste of React, add some interactivity to a
          simple HTML page, or start a complex React-powered app, the links in
          this section will help you get started.
        </Paragraph>
      </Warning>
    </>
  );
};

export const WarningAlertWithTitle = () => {
  return (
    <Warning title="Warning">
      <Paragraph>
        React has been designed from the start for gradual adoption, and{" "}
        <strong>you can use as little or as much React as you need</strong>.
        Whether you want to get a taste of React, add some interactivity to a
        simple HTML page, or start a complex React-powered app, the links in
        this section will help you get started.
      </Paragraph>
    </Warning>
  );
};

export const WarningAlertWithIcon = () => {
  return (
    <Warning showIcon>
      <Paragraph>
        React has been designed from the start for gradual adoption, and{" "}
        <strong>you can use as little or as much React as you need</strong>.
        Whether you want to get a taste of React, add some interactivity to a
        simple HTML page, or start a complex React-powered app, the links in
        this section will help you get started.
      </Paragraph>
    </Warning>
  );
};

export const WarningAlertWithIconAndTitle = () => {
  return (
    <Warning title="Warning" showIcon>
      <Paragraph>
        React has been designed from the start for gradual adoption, and{" "}
        <strong>you can use as little or as much React as you need</strong>.
        Whether you want to get a taste of React, add some interactivity to a
        simple HTML page, or start a complex React-powered app, the links in
        this section will help you get started.
      </Paragraph>
    </Warning>
  );
};
