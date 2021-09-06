import React from "react";
import { addDecorator } from "@storybook/react";
import Layout from "./Layout";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  layout: "fullscreen",
};

addDecorator((storyFn) => <Layout>{storyFn()}</Layout>);
