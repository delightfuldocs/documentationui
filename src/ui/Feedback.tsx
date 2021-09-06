import classnames from "classnames";
import React, { useState } from "react";

type Feedback = {
  type: "positive" | "negative";
  url: string;
  email?: string;
  message?: string;
  submittedAt: Date;
  timeOnPageInSeconds: number;
};

export const Feedback = ({
  onFeedbackSubmit,
}: {
  onFeedbackSubmit?: (feedback: Feedback) => void;
}) => {
  return (
    <div className="leading-none">
      <span className="text-lg font-bold">Was this page helpful?</span>
      <button className="ml-2 rounded px-3 py-2 bg-indigo-500 font-semibold text-sm text-white">
        Yes
      </button>
      <button className="ml-2 rounded px-3 py-2 bg-indigo-500 font-semibold text-sm text-white">
        No
      </button>
    </div>
  );

  const [feedbackType, setFeedbackType] = useState("");

  if (feedbackType === "negative") {
    return <NegativeFeedbackForm />;
  }

  if (feedbackType === "positive") {
    return <PositiveFeedbackForm />;
  }

  return (
    <div className="rounded p-6">
      <div className="mb-4">Was this page helpful?</div>
      <div>
        <span className="mr-1">
          <PositiveButton
            label="Yes"
            onClick={() => setFeedbackType("positive")}
          />
        </span>
        <span className="ml-1">
          <NegativeButton
            label="No"
            onClick={() => setFeedbackType("negative")}
          />
        </span>
      </div>
    </div>
  );
};

export const NegativeFeedbackForm = () => {
  const classes = {
    container: ["leading-none"],
    message: ["mb-4"],
    title: ["font-bold", "text-lg", "mb-2"],
    input: [
      "block",
      "border",
      "rounded",
      "mb-4",
      "p-4",
      "w-1/2",
      "h-32",
      "text-sm",
    ],
    submit: ["rounded", "border", "px-3", "py-2", "text-sm"],
  };
  return (
    <div className={classnames(classes.container)}>
      {/* <div className={classnames(classes.message)}>
        Thanks for submitting feedback.
      </div> */}
      <div className={classnames(classes.title)}>What can we improve?</div>
      <textarea className={classnames(classes.input)}></textarea>
      <button className={classnames(classes.submit)}>Submit</button>
    </div>
  );
};

export const PositiveFeedbackForm = () => {
  return (
    <div className="text-center">
      <div className="mb-4">What would make the documentation even better?</div>
    </div>
  );
};

const PositiveButton = ({
  label,
  onClick,
}: {
  label: string;
  onClick?: () => void;
}) => {
  return (
    <button
      className="inline-block bg-green-100 text-green-700 rounded p-2 px-4"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

const NegativeButton = ({
  label,
  onClick,
}: {
  label: string;
  onClick?: () => void;
}) => {
  return (
    <button
      className="inline-block bg-red-100 text-red-700 rounded p-2 px-4"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
