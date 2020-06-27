/** @format */

import React from "react";

type UpdateTimer = "change" | "blur" | "focus";

interface Props extends BaseComponent {
  setValue?: any;
  onChange?: any;
  updateTimer?: UpdateTimer;
}

const Field: React.SFC<Props> = (props) => {
  const { model, value, absolutePath, children } = props;
  const element = children as React.ReactElement;
  return <>{React.createElement(element.type, { value: value })}</>;
};

export default Field;
