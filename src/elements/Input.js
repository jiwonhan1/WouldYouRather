import React from "react";
import styled from "styled-components";

import { Text, Grid } from "./index";

const Input = (props) => {
  const {
    label,
    placeholder,
    type,
    _onChange,
    value,
    is_submit,
    onSubmit,
    width,
    checked,
  } = props;

  const styles = { width: width, checked: checked };

  return (
    <React.Fragment>
      <Grid is_flex>
        {label && (
          <Text margin="0px" size="20px">
            {label}
          </Text>
        )}
        {is_submit ? (
          <ElInput
            {...styles}
            type={type}
            placeholder={placeholder}
            onChange={_onChange}
            value={value}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                onSubmit(e);
              }
            }}
          />
        ) : (
          <ElInput
            {...styles}
            type={type}
            placeholder={placeholder}
            onChange={_onChange}
          />
        )}
      </Grid>
    </React.Fragment>
  );
};

Input.defaultProps = {
  label: false,
  placeholder: "Please put information",
  type: "text",
  value: "",
  width: "100%",
  is_submit: false,
  onSubmit: () => {},
  _onChange: () => {},
};

const ElInput = styled.input`
  border: 1px solid green;
  border-radius: 4px;
  padding: 12px 4px;
  box-sizing: border-box;
  ${(props) => (props.width ? `width: ${props.width};` : "")}
  ${(props) => (props.checked ? `checked: ${props.checked};` : "")}
`;

export default Input;
