import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import InputArea from "./InputArea";
import {
  signup,
  checkEmail,
  checkUsername,
} from "../store/actions/signupAction";
import { validateEmail, validateUsername } from "../util";
import { Link, useHistory } from "react-router-dom";

import Button from "./Button";

const SignupForm = () => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  let emailAvailibilty = useSelector((state) => state.emailAvailibilty);
  let usernameAvailibilty = useSelector((state) => state.usernameAvailibilty);
  emailAvailibilty = emailAvailibilty.available;
  usernameAvailibilty = usernameAvailibilty.available;

  const submitAvailable = emailAvailibilty && usernameAvailibilty;

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (submitAvailable) return;

    dispatch(
      signup({
        username: username,
        password: password,
        name: fullname,
        email: email,
      })
    );
    history.push("/login");
  };

  const checkEmailHandler = (inputEmail) => {
    if (validateEmail(inputEmail)) dispatch(checkEmail(inputEmail));
  };

  const checkUsernameHandler = (username) => {
    if (validateUsername(username)) dispatch(checkUsername(username));
  };

  return (
    <StyledForm>
      <form action="#" onSubmit={formSubmitHandler}>
        <h2>Sign Up</h2>

        <InputArea
          label="Full Name::"
          content="fullname"
          value={fullname}
          onChangeHandler={setFullname}
          type="text"
          maxLength="40"
          minLength="4"
          placeholder="Your full name"
          required={true}
        />

        <InputArea
          label="Username:"
          content="username"
          value={username}
          onChangeHandler={setUsername}
          onBlurHandler={checkUsernameHandler}
          type="text"
          maxLength="15"
          minLength="3"
          placeholder="A unique username"
          required={true}
          showError={!usernameAvailibilty}
          errorMessage="The username has already been registered"
        />

        <InputArea
          label="Email:"
          content="email"
          value={email}
          onChangeHandler={setEmail}
          onBlurHandler={checkEmailHandler}
          type="email"
          maxLength=""
          minLength=""
          placeholder="Your email"
          required={true}
          showError={!emailAvailibilty}
          errorMessage="The email has already been registered"
        />

        <InputArea
          label="Password:"
          content="password"
          value={password}
          onChangeHandler={setPassword}
          type="password"
          maxLength="20"
          minLength="6"
          placeholder="A password between 6 to 20 characters"
          required={true}
        />

        <Button value="Sign Up" disabled={!submitAvailable} />
      </form>
      <Reminder>
        Already registered? <Link to="/login">Login now!</Link>
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

export default SignupForm;
