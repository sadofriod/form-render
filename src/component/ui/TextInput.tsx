/** @format */

import React from "react";
import { InputGroup as Text } from "@blueprintjs/core";

interface Props extends BaseComponent {}

const TextInput: React.SFC<Props> = (props) => {
  const { value, label } = props;
  return (
    <>
      <div>{label}</div>
      <Text defaultValue={value} />
    </>
  );
};

export default TextInput;
