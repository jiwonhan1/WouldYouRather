import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { text, _onClick, children, margin, width, padding, nav } = props;

  const styles = {
    margin: margin,
    width: width,
    padding: padding,
  };

  if (nav) {
    return (
      <React.Fragment>
        <NavButton {...styles} onClick={_onClick}>
          {" "}
          {text ? text : children}
        </NavButton>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <ElButton {...styles} onClick={_onClick}>
        {text ? text : children}
      </ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  text: false,
  children: null,
  _onClick: () => {},
  margin: false,
  width: "100%",
  padding: "12px 0px",
  nav: false,
};

const ElButton = styled.button`
  width: ${(props) => props.width};
  background-color: green;
  color: #ffffff;
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
`;

const NavButton = styled.button`
  width: ${(props) => props.width};
  background-color: green;
  color: #ffffff;
  cursor: pointer;
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  border: none;
  border-radius: 4px;
  font-size: 22px;
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
`;

export default Button;
