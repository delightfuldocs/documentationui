import React from "react";
import { OrderedList, OrderedListItem } from "./OrderedList";

export default {
  title: "OrderedList",
};

export const BasicOrderedList = () => {
  return (
    <OrderedList>
      <OrderedListItem>
        For an overview of what apps are, see <a href="#">Apps</a>.
      </OrderedListItem>
      <OrderedListItem>
        To start making an app, see <a href="#">Quick start</a>.
      </OrderedListItem>
      <OrderedListItem>
        If you have any questions, <a href="#">create a support ticket</a>.
      </OrderedListItem>
    </OrderedList>
  );
};
