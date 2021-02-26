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
import InputArea from "./InputArea";
import Button from "./Button";

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
        {/* <StyledInput
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
        /> */}
        <InputArea
          content="username"
          value={username}
          type="text"
          placeholder="Username or Email"
          required={true}
          onChangeHandler={setUsername}
          icon={UserIcon}
        />
        <InputArea
          content="password"
          value={password}
          onChangeHandler={setPassword}
          type="password"
          placeholder="Password"
          required={true}
          icon={PasswordIcon}
        />
        {/* <StyledInput
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
        /> */}
        <Button value="login" disabled={false} />
        {/* <StyledButton type="submit" value="login" /> */}
      </form>
    </StyledForm>
  );
};

const StyledForm = styled.div`
  width: 30%;
  margin: 5rem auto;
  h2 {
    margin-bottom: 2rem;
  }
`;

export default LoginForm;
