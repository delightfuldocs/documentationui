import React from "react";
import { Topic } from "./Topic";
import { Paragraph } from "./Paragraph";
import { H2 } from "./Heading";
import { Link } from "./links/Link";
import { Code } from "./Code";
import { CodeBlock } from "./CodeBlock";
import { Note } from "./alerts/Note";
import { ListItem, UnorderedList } from "./UnorderedList";
import { Tip } from "./alerts/Tip";

export default {
  title: "Topic",
};

export const BasicTopic = () => {
  return (
    <Topic
      title="Overview"
      subtitle="An introduction to Canva's app development platform."
    >
      <Paragraph>
        Canva's app development platform allows anyone to create apps that add
        features to Canva. Apps can import content into Canva, export content
        out of Canva, apply effects to images, and more.
      </Paragraph>
      <Paragraph>
        This documentation contains everything you need to know about creating
        apps.
      </Paragraph>
      <Paragraph>
        For example, if the <strong>Base URL</strong> of a{" "}
        <Link url="#">publish extension</Link> is <Code>example.com</Code>,
        Canva may send requests to the following endpoints:
      </Paragraph>
      <UnorderedList>
        <ListItem>
          <Code>example.com/publish/resources/find</Code>
        </ListItem>
        <ListItem>
          <Code>example.com/publish/resources/get</Code>
        </ListItem>
        <ListItem>
          <Code>example.com/publish/resources/upload</Code>
        </ListItem>
      </UnorderedList>
      <H2>First steps</H2>
      <UnorderedList>
        <ListItem>
          For an overview of what apps are, see <Link url="#">Apps</Link>.
        </ListItem>
        <ListItem>
          To start making an app, see <Link url="#">Quick start</Link>.
        </ListItem>
        <ListItem>
          If you have any questions,{" "}
          <Link url="#">create a support ticket</Link>.
        </ListItem>
      </UnorderedList>
      <H2>Looking for a REST API?</H2>
      <Paragraph>
        Canva doesn’t have a REST API for automating interactions with Canva via
        HTTP requests, but it’s something we’re looking into. If you’d like to
        keep up to date with any developments or request a specific feature for
        the API, <Link url="#">click here to register your interest</Link>.
      </Paragraph>
      <H2>How the documentation is organized</H2>
      <Paragraph>
        Canva's app development platform has a lot of features and a lot of
        documentation. This section provides an overview of how the
        documentation is organized.
      </Paragraph>
      <Paragraph>
        The documentation is organized into the following sections:
      </Paragraph>
      <UnorderedList>
        <ListItem>
          <strong>Platform concepts</strong> - Explanations of the platform's
          essential concepts, such as the difference between apps and
          extensions, and how to create new versions of apps.
        </ListItem>
      </UnorderedList>
      <Tip>
        <Paragraph>
          Can't find what you're looking for? Search the docs for instant
          results.
        </Paragraph>
      </Tip>
      <H2>Example</H2>
      <CodeBlock
        code={`function isValidTimestamp(
  sentAtSeconds: number,
  receivedAtSeconds: number,
  leniencyInSeconds: number = 300
): boolean {
  return Math.abs(sentAtSeconds - receivedAtSeconds) < leniencyInSeconds;
}`}
      />
    </Topic>
  );
};
