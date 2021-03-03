import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar } from "@fortawesome/free-regular-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { clearLoginStore } from "../store/actions/loginAction";
import { useDispatch } from "react-redux";
const Nav = () => {
  const { pathname } = useLocation();
  const homeIcon = <FontAwesomeIcon icon={faHome} />;
  const barIcon = <FontAwesomeIcon icon={faChartBar} />;
  const doorIcon = <FontAwesomeIcon icon={faDoorOpen} />;
  const dispatch = useDispatch();

  const history = useHistory();
  return (
    <StyledNav>
      <NavWrapper>
        <h1>
          <Link to="/">Polling App</Link>
        </h1>
        <LinkList>
          {localStorage.getItem("accessToken") === null ||
          localStorage.getItem("accessToken").length === 0 ? (
            <>
              <NavLink to="/login" light={pathname === "/login" ? 1 : 0}>
                Login
              </NavLink>
              <NavLink to="/signup" light={pathname === "/signup" ? 1 : 0}>
                Signup
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/" light={pathname === "/" ? 1 : 0}>
                {homeIcon}
              </NavLink>

              <NavLink
                to="/createPoll"
                light={pathname === "/createPoll" ? 1 : 0}
              >
                {barIcon}
              </NavLink>
              <NavLink
                to="#"
                onClick={() => {
                  localStorage.setItem("accessToken", "");
                  dispatch(clearLoginStore());
                  history.go(0);
                }}
              >
                {doorIcon}
              </NavLink>
              {/* <DropMenu>
                <UserInfo>
                  <h3>fullname</h3>
                  <p>@username</p>
                </UserInfo>
              </DropMenu> */}
            </>
          )}
        </LinkList>
      </NavWrapper>
    </StyledNav>
  );
};
const StyledNav = styled.div`
  width: 100%;
  position: relative;
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
// const DropMenu = styled.div`
//   width: 16rem;
//   height: 16rem;
//   position: absolute;
//   right: 5rem;
//   top: 6rem;
//   border: 1px solid lightgray;
// `;
export default Nav;
