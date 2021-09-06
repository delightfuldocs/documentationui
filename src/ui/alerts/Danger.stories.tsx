import React from "react";
import { Paragraph } from "../Paragraph";
import { Danger } from "./Danger";

export default {
  title: "Alerts/Danger",
};

export const DangerAlert = () => {
  return (
    <>
      <Danger>
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
      </Danger>
    </>
  );
};

export const DangerAlertWithTitle = () => {
  return (
    <Danger title="Danger">
      <Paragraph>
        React has been designed from the start for gradual adoption, and{" "}
        <strong>you can use as little or as much React as you need</strong>.
        Whether you want to get a taste of React, add some interactivity to a
        simple HTML page, or start a complex React-powered app, the links in
        this section will help you get started.
      </Paragraph>
    </Danger>
  );
};

export const DangerAlertWithIcon = () => {
  return (
    <Danger showIcon>
      <Paragraph>
        React has been designed from the start for gradual adoption, and{" "}
        <strong>you can use as little or as much React as you need</strong>.
        Whether you want to get a taste of React, add some interactivity to a
        simple HTML page, or start a complex React-powered app, the links in
        this section will help you get started.
      </Paragraph>
    </Danger>
  );
};

export const DangerAlertWithIconAndTitle = () => {
  return (
    <Danger title="Danger" showIcon>
      <Paragraph>
        React has been designed from the start for gradual adoption, and{" "}
        <strong>you can use as little or as much React as you need</strong>.
        Whether you want to get a taste of React, add some interactivity to a
        simple HTML page, or start a complex React-powered app, the links in
        this section will help you get started.
      </Paragraph>
    </Danger>
  );
};
