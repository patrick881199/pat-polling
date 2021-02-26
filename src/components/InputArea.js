import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
const InputArea = ({
  label,
  content,
  value,
  onChangeHandler,
  onBlurHandler,
  type,
  maxLength,
  minLength,
  placeholder,
  required,
  showError,
  errorMessage,
  icon,
}) => {
  return (
    <div className="input">
      <label htmlFor={content}>{label}</label>
      <StyledInput
        value={value}
        onChange={
          onChangeHandler ? (e) => onChangeHandler(e.target.value) : () => {}
        }
        onBlur={onBlurHandler ? (e) => onBlurHandler(e.target.value) : () => {}}
        type={type}
        id={content}
        name={content}
        maxLength={maxLength}
        minLength={minLength}
        placeholder={placeholder}
        required={required}
        icon={icon}
      />
      <ErrorMsgWrapper>
        <ErrorMessage
          transition={{ duration: 0.75 }}
          initial={{ y: -25 }}
          animate={{ y: showError ? 0 : -25 }}
        >
          <p>{errorMessage}</p>
        </ErrorMessage>
      </ErrorMsgWrapper>
    </div>
  );
};

const StyledInput = styled.input`
  display: block;
  width: 100%;

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

const ErrorMsgWrapper = styled(motion.div)`
  height: 2.4rem;
  overflow: hidden;
`;

const ErrorMessage = styled(motion.div)`
  background-color: aliceblue;
  padding: 0rem 1rem;
  border-radius: 0.5rem;
  z-index: -10;
  p {
    color: #f55e5e;
    font-size: 1.2rem;
  }
`;

export default InputArea;

// <InputArea
// label="Username:"
// content="username"
// value={username}
// onChangeHandler={setUsername}
// onBlurHandler={checkUsernameHandler}
// type="text"
// maxLength="15"
// minLength="3"
// placeholder="A unique username"
// required={true}
// showError={!usernameAvailibilty}
// errorMessage="The username has already been registered"
// icon=""
// />
