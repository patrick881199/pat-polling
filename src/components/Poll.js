import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { vote, clearPreviousVoteResult } from "../store/actions/voteAction";
import { randomProperty, convertUTCDateToLocalDate, timeLeft } from "../util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Poll = ({ t }) => {
  const [poll, setPoll] = useState(t);
  const [selectedOption, setSelectedOption] = useState("");
  const radioSelectedHandler = (e) => {
    setSelectedOption(e.target.id);
  };

  const selected = poll.selectedChoice;
  const active = timeLeft(poll.expirationDateTime);
  const checkedIcon = <FontAwesomeIcon icon={faCheckCircle} />;

  let mostVoteCount = 0;

  poll.choices.map((choice) => {
    mostVoteCount =
      choice.voteCount > mostVoteCount ? choice.voteCount : mostVoteCount;
  });

  const voteResult = useSelector((state) => state.voteResult);
  const { pollResult } = voteResult;

  const choiceList = poll.choices.map((choice) => {
    const percentage = `${Math.round(
      (choice.voteCount / poll.totalVotes) * 100
    )}% `;
    return (
      <Choice
        key={choice.id}
        grey={poll.selectedChoice === choice.id}
        blue={!active && choice.voteCount === mostVoteCount}
      >
        {!selected && active && (
          <input
            type="radio"
            id={choice.id}
            name={poll.id}
            value={choice.text}
            onChange={(e) => radioSelectedHandler(e)}
            required
          />
        )}
        <label htmlFor={choice.id}>
          {selected && percentage}
          {choice.text + "   "}
          {poll.selectedChoice === choice.id && checkedIcon}
        </label>
      </Choice>
    );
  });

  const dispatch = useDispatch();
  const history = useHistory();
  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(clearPreviousVoteResult());

    if (
      localStorage.getItem("accessToken") === null ||
      localStorage.getItem("accessToken").length === 0
    ) {
      history.push("/login");
    } else {
      dispatch(vote(poll.id, selectedOption));
    }
  };
  useEffect(() => {
    if (pollResult !== null) {
      if (poll.id === pollResult.id) {
        setPoll(pollResult);
      }
    }
  }, [pollResult]);

  const createDateTime = convertUTCDateToLocalDate(poll.creationDateTime);

  const timeLeftString = timeLeft(poll.expirationDateTime)
    ? timeLeft(poll.expirationDateTime)
    : "Final results";

  return (
    <StyledPoll>
      <Title>
        <UserIcon
          color={randomProperty(poll.createdBy.name, poll.createdBy.username)}
        >
          <h1>{poll.createdBy.name.substr(0, 1).toUpperCase()}</h1>
        </UserIcon>
        <TextInfo>
          <UserInfo>
            <Fullname>{poll.createdBy.name}</Fullname>
            <Username>@{poll.createdBy.username}</Username>
          </UserInfo>
          <CreateTime>{createDateTime}</CreateTime>
        </TextInfo>
      </Title>
      <Form action="#" onSubmit={(e) => formSubmitHandler(e)}>
        <p>{poll.question}</p>
        {choiceList}
        <VoteLine>
          {!selected && active && <input type="submit" value="Vote"></input>}
          <div className="totalvotes">{poll.totalVotes} votes </div>
          <div className="timeleft"> {timeLeftString}</div>
        </VoteLine>
      </Form>
    </StyledPoll>
  );
};

const StyledPoll = styled.div`
  width: 60rem;
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
  background-color: ${(props) => props.color};
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
  width: 100%;
  background-color: ${(props) => (props.grey ? "#dfdfdf" : "")};
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${(props) => (props.blue ? "#40a9ff" : "")};

  input {
    margin-right: 1rem;
    cursor: pointer;
  }
  label {
    width: 100%;
    cursor: pointer;
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
    cursor: pointer;
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
//         "voteCount": 0totalVotes
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
