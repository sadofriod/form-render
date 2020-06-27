/** @format */

import React from "react";

interface Props extends BaseComponent {}

const Default: React.SFC<Props> = (props) => {
  const { children } = props;
  console.log(children);

  return <>{children}</>;
};

export default Default;
