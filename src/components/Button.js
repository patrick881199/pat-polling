import React from "react";
import styled from "styled-components";
const Button = ({ value, disabled }) => {
  return (
    <StyledButton
      type="submit"
      value={value}
      disabled={disabled ? true : false}
    />
  );
};

const StyledButton = styled.input`
  border-style: solid;
  width: 100%;
  display: block;
  height: 3.5rem;
  border-radius: 1rem;
  background-color: #1890ff;
  border-color: #1890ff;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  :hover {
    background-color: #44a5ff;
  }
  :disabled {
    background-color: #75bcfd;
  }
`;

export default Button;
