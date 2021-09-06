import React from "react";
import { Badge } from "./Badges";

type HeadingProps = {
  depth: number;
  children: React.ReactNode;
  id?: string;
  step?: number;
  optional?: boolean;
  badge?: Badge;
};

// TODO: Add link icon to headings
// TODO: Add badges to headings

export const H1 = (props: Omit<HeadingProps, "depth">) => {
  return <Heading depth={1} {...props} />;
};

export const H2 = (props: Omit<HeadingProps, "depth">) => {
  return <Heading depth={2} {...props} />;
};

export const H3 = (props: Omit<HeadingProps, "depth">) => {
  return <Heading depth={3} {...props} />;
};

export const H4 = (props: Omit<HeadingProps, "depth">) => {
  return <Heading depth={4} {...props} />;
};

const Heading = ({ depth, children, step, optional, badge }: HeadingProps) => {
  const element = getHeadingElementForDepth(depth);

  return React.createElement(
    element,
    {
      className: `heading heading-${depth}`,
    },
    <>
      {optional ? <OptionalPrefix /> : null}
      {step ? <StepNumberPrefix number={step} /> : null}
      <span className="heading__content">{children}</span>
      {badge ? <BadgeList badge={badge} /> : null}
    </>
  );
};

const OptionalPrefix = () => {
  return <span className="heading__optional-prefix">(Optional) </span>;
};

const StepNumberPrefix = ({ number }: { number: number }) => {
  return <span className="heading__step-number-prefix">Step {number}: </span>;
};

const BadgeList = ({ badge }: { badge: Badge }) => {
  return (
    <span className="heading__badge-list">
      <Badge {...badge} />
    </span>
  );
};

const getHeadingElementForDepth = (depth: number) => {
  switch (depth) {
    case 1:
      return "h1";
    case 2:
      return "h2";
    case 3:
      return "h3";
    case 4:
      return "h4";
    default:
      throw new Error(`Invalid depth for heading: ${depth}`);
  }
};
