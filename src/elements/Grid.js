import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const { is_flex, width, margin, padding, center, _onClick, children } = props;

  const styles = {
    is_flex: is_flex,
    width: width,
    margin: margin,
    padding: padding,
    center: center,
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
  _onClick: () => {},
};

const GridBox = styled.div`
  border: 2px solid green;
  width: ${(props) => props.width};
  height: 100%,
  box-sizing: border-box;
  ${(props) => (props.center ? `text-align: center;` : "")}
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: center; flex-direction:column; `
      : ""}
  ${(props) => (props.center ? `text-align: center;` : "")}

`;

export default Grid;
