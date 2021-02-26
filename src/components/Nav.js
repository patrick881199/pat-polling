import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <NavWrapper>
        <h1>
          <Link to="/">Polling App</Link>
        </h1>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </NavWrapper>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  width: 100%;

  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.2);
`;

const NavWrapper = styled.div`
  width: 80%;
  min-height: 10vh;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 a {
    color: #1890ff;
    /* flex: 5 1 20rem; */
  }
  ul {
    /* flex: 1 1 5rem; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    li {
      padding: 0rem 1rem;
      font-size: 1.5rem;
    }
  }
`;

export default Nav;
