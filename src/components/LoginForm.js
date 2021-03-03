import React, { useState } from "react";
import styled from "styled-components";

import UserIcon from "../imgs/userIcon.svg";

import PasswordIcon from "../imgs/passwordIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/actions/loginAction";
import InputArea from "./InputArea";
import Button from "./Button";
import { Link, useHistory } from "react-router-dom";
import { useEffect } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const history = useHistory();
  const loginToken = useSelector((state) => state.loginToken);
  const { accessToken, tokenType } = loginToken;

  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(login({ usernameOrEmail: username, password: password }));
  };

  useEffect(() => {
    if (accessToken.length > 0) {
      history.push("/");
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("tokenType", tokenType);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);

  return (
    <StyledForm>
      <form action="#" onSubmit={formSubmitHandler}>
        <h2>Login</h2>

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

        <Button value="login" disabled={false} />
      </form>
      <Reminder>
        Or <Link to="/signup">register now!</Link>
      </Reminder>
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

const Reminder = styled.div`
  font-size: 1.3rem;
  padding: 1rem 0rem;
  a {
    color: #1890ff;
  }
`;
export default LoginForm;
