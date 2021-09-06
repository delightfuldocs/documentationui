import React from "react";
import { UnorderedList, ListItem } from "./UnorderedList";

export default {
  title: "UnorderedList",
};

export const BasicUnorderedList = () => {
  return (
    <UnorderedList>
      <ListItem>
        For an overview of what apps are, see <a href="#">Apps</a>.
      </ListItem>
      <ListItem>
        To start making an app, see <a href="#">Quick start</a>.
      </ListItem>
      <ListItem>
        If you have any questions, <a href="#">create a support ticket</a>.
      </ListItem>
    </UnorderedList>
  );
};
