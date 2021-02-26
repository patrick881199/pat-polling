import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import apple from "../imgs/apple.svg";

const Poll = ({ poll }) => {
  const choiceList = poll.choices.map((choice) => {
    return (
      <Choice>
        <input type="radio" id={choice.id} name={poll.id} value={choice.text} />
        <label for={choice.id}>{choice.text}</label>
      </Choice>
    );
  });

  return (
    <StyledPoll>
      <Title>
        <UserIcon>
          <h1>G</h1>
        </UserIcon>
        <TextInfo>
          <UserInfo>
            <Fullname>{poll.createdBy.name}</Fullname>
            <Username>@{poll.createdBy.username}</Username>
          </UserInfo>
          <CreateTime>{poll.creationDateTime}</CreateTime>
        </TextInfo>
      </Title>
      <Form action="">
        <p>{poll.question}</p>
        {choiceList}
        <VoteLine>
          <input type="submit" value="Vote"></input>
          <div className="totalvotes">{poll.totalVotes} totalVotes </div>
          <div className="timeleft"> {poll.expirationDateTime} hours left</div>
        </VoteLine>
      </Form>
    </StyledPoll>
  );
};

const StyledPoll = styled.div`
  width: 40%;
  margin: 2rem auto;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  font-size: 1.4rem;
`;

const UserIcon = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 25rem;
  color: white;
  font-weight: lighter;
  background-color: lightcoral;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
`;

const Title = styled.div`
  display: flex;
  margin: 1rem 0rem;
`;

const UserInfo = styled.div`
  display: flex;
`;

const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const Fullname = styled.div`
  margin-right: 1rem;
  margin-bottom: 0.5rem;
`;

const Username = styled.div`
  color: #657786;
`;

const CreateTime = styled.div`
  color: #657786;
`;

const Form = styled.form`
  p {
    color: black;
  }
`;

const Choice = styled.div`
  margin: 1.8rem 0rem;
  display: flex;
  font-size: 1.4rem;
  input {
    margin-right: 1rem;
  }
`;

const VoteLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  input {
    background-color: transparent;
    border: 1px solid #40a9ff;
    border-radius: 3rem;
    padding: 0.8rem 1rem;
    margin-right: 1rem;
    color: #40a9ff;
  }
  div {
    margin: 0rem 0.5rem;
    color: #657786;
  }
`;

export default Poll;

//
//     "id": 6,
//     "question": "冲数量的投票",
//     "choices": [
//       {
//         "id": 13,
//         "text": "过得舒服吧",
//         "voteCount": 0
//       },
//       {
//         "id": 14,
//         "text": "分割线",
//         "voteCount": 0
//       }
//     ],
//     "createdBy": {
//       "id": 1,
//       "username": "admin",
//       "name": "guang shi"
//     },
//     "creationDateTime": "2021-02-24T21:39:00Z",
//     "expirationDateTime": "2021-02-25T21:39:00Z",
//     "totalVotes": 0,
//     "expired": true
//
