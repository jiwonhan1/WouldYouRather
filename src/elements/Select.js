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
  width: "60%",
  height: "40%",
  fontSize: "30px",
  children: null,
  _onChange: () => {},
};

const SelectForm = styled.select`
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  border: 2px solid green;
  border-radius: 4px;
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
`;

export default Select;
