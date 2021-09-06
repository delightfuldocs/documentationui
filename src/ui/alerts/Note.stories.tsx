import React from "react";
import { Paragraph } from "../Paragraph";
import { Note } from "./Note";

export default {
  title: "Alerts/Note",
};

export const NoteAlertWithShortText = () => {
  return (
    <>
      <Note>
        <Paragraph>
          React has been designed from the start for gradual adoption.
        </Paragraph>
      </Note>
    </>
  );
};

export const NoteAlertWithLongText = () => {
  return (
    <>
      <Note>
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
      </Note>
    </>
  );
};

export const NoteAlertWithTitle = () => {
  return (
    <Note title="Note">
      <Paragraph>
        React has been designed from the start for gradual adoption, and{" "}
        <strong>you can use as little or as much React as you need</strong>.
        Whether you want to get a taste of React, add some interactivity to a
        simple HTML page, or start a complex React-powered app, the links in
        this section will help you get started.
      </Paragraph>
    </Note>
  );
};

export const NoteAlertWithIcon = () => {
  return (
    <Note showIcon>
      <Paragraph>
        React has been designed from the start for gradual adoption, and{" "}
        <strong>you can use as little or as much React as you need</strong>.
        Whether you want to get a taste of React, add some interactivity to a
        simple HTML page, or start a complex React-powered app, the links in
        this section will help you get started.
      </Paragraph>
    </Note>
  );
};

export const NoteAlertWithIconAndTitle = () => {
  return (
    <Note title="Note" showIcon>
      <Paragraph>
        React has been designed from the start for gradual adoption, and{" "}
        <strong>you can use as little or as much React as you need</strong>.
        Whether you want to get a taste of React, add some interactivity to a
        simple HTML page, or start a complex React-powered app, the links in
        this section will help you get started.
      </Paragraph>
    </Note>
  );
};
