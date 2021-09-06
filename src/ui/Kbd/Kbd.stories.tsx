import React from "react";
import { Kbd } from "./Kbd";

export default {
  title: "Kbd",
};

export const KbdWithTextLabels = () => {
  return (
    <>
      <Kbd>Command</Kbd>
      <Kbd>Option</Kbd>
      <Kbd>Shift</Kbd>
      <Kbd>Alt</Kbd>
    </>
  );
};

export const KbdWithIconLabels = () => {
  return (
    <>
      <Kbd format="icon">Command</Kbd>
      <Kbd format="icon">Option</Kbd>
      <Kbd format="icon">Shift</Kbd>
      <Kbd format="icon">Alt</Kbd>
    </>
  );
};
