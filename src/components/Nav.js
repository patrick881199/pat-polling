import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <h1>Polling App</h1>
      <ul>
        <li>
          <a href="">Login</a>
        </li>
        <li>
          <a href="">Signup</a>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  width: 70%;
  min-height: 10vh;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    flex: 1 1 40rem;
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export default Nav;
