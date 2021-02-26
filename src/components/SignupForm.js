import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import InputArea from "./InputArea";
import {
  signup,
  checkEmail,
  checkUsername,
} from "../store/actions/signupAction";
import { validateEmail, validateUsername } from "../util";
import { useHistory } from "react-router-dom";

import { errorMesAnim } from "../animation";
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

export default SignupForm;

{
  /* <label htmlFor="fullname">Full Name:</label>
        <StyledInput
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          type="text"
          id="fullname"
          name="fullname"
          maxLength="40"
          minLength="4"
          placeholder="Your full name"
          required
        />
        <ErrorMsgWrapper>
          <ErrorMessage
            transition={{ duration: 0.75 }}
            initial={{ y: -25 }}
            animate={{ y: false ? 0 : -25 }}
          >
            <p>The email has already been registered</p>
          </ErrorMessage>
        </ErrorMsgWrapper> */
}

{
  /* <label htmlFor="username">Username:</label>
        <StyledInput
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          id="username"
          name="username"
          maxLength="15"
          minLength="3"
          placeholder="A unique username"
          required
          onBlur={(e) => checkUsernameHandler(e.target.value)}
        />
        <ErrorMsgWrapper>
          <ErrorMessage
            transition={{ duration: 0.75 }}
            initial={{ y: -25 }}
            animate={{ y: !usernameAvailibilty ? 0 : -25 }}
          >
            <p>The username has already been registered</p>
          </ErrorMessage>
        </ErrorMsgWrapper> */
}
{
  /* <label htmlFor="email">Email:</label>
        <StyledInput
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="email"
          name="email"
          placeholder="Your email"
          required
          onBlur={(e) => checkEmailHandler(e.target.value)}
        />
        <ErrorMsgWrapper>
          <ErrorMessage
            transition={{ duration: 0.75 }}
            initial={{ y: -25 }}
            animate={{ y: !emailAvailibilty ? 0 : -25 }}
          >
            <p>The email has already been registered</p>
          </ErrorMessage>
        </ErrorMsgWrapper> */
}
{
  /* 
        <label htmlFor="password">Password:</label>
        <StyledInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="password"
          name="password"
          maxLength="20"
          minLength="6"
          placeholder="A password between 6 to 20 characters"
          required
        />
        <ErrorMsgWrapper>
          <ErrorMessage
            transition={{ duration: 0.75 }}
            initial={{ y: -25 }}
            animate={{ y: false ? 0 : -25 }}
          >
            <p>The email has already been registered</p>
          </ErrorMessage>
        </ErrorMsgWrapper> */
}
