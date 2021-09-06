import React from "react";

type AlertProps = {
  title?: string;
  icon: React.ReactNode;
  showIcon?: boolean;
  children: React.ReactNode;
  type: "note" | "warning" | "danger" | "tip";
};

export const Alert = ({
  title,
  children,
  showIcon = true,
  type,
  icon,
}: AlertProps) => {
  return (
    <div className={`alert alert__${type}`}>
      {showIcon ? <div className="alert__icon">{icon}</div> : null}
      <div className="alert__body">
        <div>
          {title ? <div className="alert__title">{title}</div> : null}
          <div className="alert__content">{children}</div>
        </div>
      </div>
    </div>
  );
};
