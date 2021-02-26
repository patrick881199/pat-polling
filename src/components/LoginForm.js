import React, { useState } from "react";
import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-regular-svg-icons";
// import { faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
// const passwordIcon = <FontAwesomeIcon icon={faUnlockAlt} />;
import UserIcon from "../imgs/userIcon.svg";

import PasswordIcon from "../imgs/passwordIcon.svg";
import { useDispatch } from "react-redux";
import { login } from "../store/actions/loginAction";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(login({ usernameOrEmail: username, password: password }));
    setUsername("");
    setPassword("");
  };

  return (
    <StyledForm>
      <form action="#" onSubmit={formSubmitHandler}>
        <h2>Login</h2>
        <StyledInput
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          id="username"
          name="username"
          maxLength="15"
          minLength="8"
          placeholder="Username or Email"
          required
          icon={UserIcon}
        />
        <StyledInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="password"
          name="password"
          maxLength="20"
          minLength="8"
          placeholder="Password"
          required
          icon={PasswordIcon}
        />

        <StyledButton type="submit" value="login" />
      </form>
    </StyledForm>
  );
};

const StyledForm = styled.div`
  width: 30%;
  margin: 5rem auto;
`;
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
`;
const StyledInput = styled.input.attrs((props) => ({
  minLength: props.minLength,
  maxLength: props.maxLength,
}))`
  display: block;
  width: 100%;
  margin: 2rem 0rem;
  height: 4rem;
  border-radius: 0.5rem;
  border-color: lightgrey;
  font-size: 1.8rem;
  padding: 0.5rem;
  border-style: solid;
  color: #909090;
  background: url(${(props) => props.icon}) no-repeat scroll 0.8rem 1rem;
  background-size: 1.8rem 1.8rem;

  padding-left: 3.5rem;
`;

export default LoginForm;
