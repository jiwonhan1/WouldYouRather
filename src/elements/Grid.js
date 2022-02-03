import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const {
    is_flex,
    width,
    margin,
    padding,
    center,
    _onClick,
    children,
    column,
    backgroundColor,
    border,
  } = props;

  const styles = {
    is_flex: is_flex,
    width: width,
    margin: margin,
    padding: padding,
    center: center,
    column: column,
    backgroundColor: backgroundColor,
    border: border,
  };
  return (
    <React.Fragment>
      <GridBox {...styles} onClick={_onClick}>
        {children}
      </GridBox>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  children: null,
  is_flex: false,
  width: "100%",
  padding: false,
  margin: false,
  center: false,
  column: false,
  _onClick: () => {},
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  box-sizing: border-box;
  ${(props) =>
    props.border ? `border: 2px solid green; border-radius: 4px;` : ""}
  ${(props) => (props.center ? `text-align: center;` : "")}
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-evenly;  `
      : ""}
  ${(props) =>
    props.column
      ? `display: flex; flex-direction: column; align-items: center; justify-content: center;`
      : ""}
  ${(props) => (props.center ? `text-align: center;` : "")}
  ${(props) =>
    props.backgroundColor ? `background-color: ${props.backgroundColor}` : ""}
`;

export default Grid;
