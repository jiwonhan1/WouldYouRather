import React from "react";
import styled from "styled-components";

const Select = (props) => {
  const { width, height, children, _onChange } = props;

  const styles = {
    width: width,
    height: height,
  };
  return (
    <React.Fragment>
      <SelectForm {...styles} onChange={_onChange}>
        <option>User</option>
        {children.map((user) => {
          const { name } = user;
          return <option key={name}>{name}</option>;
        })}
      </SelectForm>
    </React.Fragment>
  );
};

Select.defaultProps = {
  width: "50%",
  height: "40%",
  fontSize: "16px",
  children: null,
  _onChange: () => {},
};

const SelectForm = styled.select`
  width: ${(props) => props.width};
  background-color: #212121;
  color: #ffffff;
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  border: none;
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
`;

export default Select;
