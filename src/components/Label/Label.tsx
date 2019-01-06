import * as React from "react";
import "./Label.css";

export const Label: React.FunctionComponent<React.Props<{}>> = ({
  children
}) => {
  return <span className="label">{children}</span>;
};

export default Label;
