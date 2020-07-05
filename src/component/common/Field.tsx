/** @format */

import React from "react";

type UpdateTimer = "change" | "blur" | "focus";

interface Props extends BaseComponent {
  setValue?: any;
  onChange?: any;
  updateTimer?: UpdateTimer;
}

const Field: React.SFC<Props> = (props) => {
  const { model, value, absolutePath, children, setValue, label } = props;
  const element = children as React.ReactElement;
  return React.createElement(element.type, {
    value: value,
    onChange: setValue,
    label: label,
  });
};

export default Field;
