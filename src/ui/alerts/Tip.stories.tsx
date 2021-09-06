import React from "react";
import { Paragraph } from "../Paragraph";
import { Tip } from "./Tip";

export default {
  title: "Alerts/Tip",
};

export const TipAlert = () => {
  return (
    <>
      <Tip>
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
      </Tip>
    </>
  );
};

export const TipAlertWithTitle = () => {
  return (
    <Tip title="Tip">
      <Paragraph>
        React has been designed from the start for gradual adoption, and{" "}
        <strong>you can use as little or as much React as you need</strong>.
        Whether you want to get a taste of React, add some interactivity to a
        simple HTML page, or start a complex React-powered app, the links in
        this section will help you get started.
      </Paragraph>
    </Tip>
  );
};

export const TipAlertWithIcon = () => {
  return (
    <Tip showIcon>
      <Paragraph>
        React has been designed from the start for gradual adoption, and{" "}
        <strong>you can use as little or as much React as you need</strong>.
        Whether you want to get a taste of React, add some interactivity to a
        simple HTML page, or start a complex React-powered app, the links in
        this section will help you get started.
      </Paragraph>
    </Tip>
  );
};

export const TipAlertWithIconAndTitle = () => {
  return (
    <Tip title="Tip" showIcon>
      <Paragraph>
        React has been designed from the start for gradual adoption, and{" "}
        <strong>you can use as little or as much React as you need</strong>.
        Whether you want to get a taste of React, add some interactivity to a
        simple HTML page, or start a complex React-powered app, the links in
        this section will help you get started.
      </Paragraph>
    </Tip>
  );
};
