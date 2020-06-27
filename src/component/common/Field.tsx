/** @format */

import React from "react";

interface Props extends BaseComponent {}

const Field: React.SFC<Props> = (props) => {
  const { model, value, absolutePath, children } = props;
  const element = children as React.ReactElement;
  return <>{React.createElement(element.type, { value: value })}</>;
};

export default Field;
