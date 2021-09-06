export type ShellCommandActionType = "copy" | "run";

export type ShellCommandAction = {
  type: ShellCommandActionType;
  icon?: string | boolean;
  text?: string | boolean;
  handler?: (props: ShellCommandHandlerProps) => void;
};

export type ShellCommandHandlerProps = {
  type: ShellCommandActionType;
  command: {
    text: string;
    ast: any;
  };
  handledAt: Date;
};

export type ShellCommandProps = {
  prompt?: string;
  command: string;
  actions?: ShellCommandAction[];
};
