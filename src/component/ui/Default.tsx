/** @format */

import React from "react";

interface Props extends BaseComponent {}

const Default: React.SFC<Props> = (props) => {
  const { children } = props;

  return <>{children}</>;
};

export default Default;
