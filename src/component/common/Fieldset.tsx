/** @format */

import React from "react";

interface Props extends BaseComponent {}

const Fieldset: React.SFC<Props> = (props) => {
  const { model, absolutePath, children } = props;
  const element = children as React.ReactElement;
  return <>{React.createElement(element.type, {})}</>;
};

export default Fieldset;
