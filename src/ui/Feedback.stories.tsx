import React from "react";
import {
  Feedback,
  PositiveFeedbackForm,
  NegativeFeedbackForm,
} from "./Feedback";

export default {
  title: "Feedback",
};

export const BasicFeedback = () => {
  return <Feedback />;
};

export const BasicPositiveFeedbackForm = () => {
  return <PositiveFeedbackForm />;
};

export const BasicNegativeFeedbackForm = () => {
  return <NegativeFeedbackForm />;
};
