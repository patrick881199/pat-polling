import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  const { pathname } = useLocation();

  return (
    <StyledNav>
      <NavWrapper>
        <h1>
          <Link to="/">Polling App</Link>
        </h1>
        <LinkList>
          <NavLink to="/login" light={pathname === "/login"}>
            Login
          </NavLink>

          <NavLink to="/signup" light={pathname === "/signup"}>
            Signup
          </NavLink>
        </LinkList>
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
`;

const LinkList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavLink = styled(Link)`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
  font-size: 1.7rem;
  border-bottom: ${(props) => (props.light ? "2px solid #1890ff" : "")};
  color: ${(props) => (props.light ? "#1890ff" : "")};
  :hover {
    border-bottom: 2px solid #1890ff;
    color: #1890ff;
  }
`;

export default Nav;
