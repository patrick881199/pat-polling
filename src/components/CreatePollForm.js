import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "./Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { clearCreationMessage, createPolls } from "../store/actions/pollAction";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const CreatePoll = () => {
  const deleteIcon = <FontAwesomeIcon icon={faTimes} />;
  const dispatch = useDispatch();

  const [question, setQuestion] = useState("");
  const [choices, setChoices] = useState([{ text: "" }, { text: "" }]);
  const [pollLength, setPollLength] = useState({ days: 1, hours: 0 });

  const createPollsResults = useSelector((state) => state.createPollsResults);

  const { success } = createPollsResults;

  const history = useHistory();

  useEffect(() => {
    if (success) {
      history.push("/");
    }
    dispatch(clearCreationMessage());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const payload = {
      question: question,
      choices: choices,
      pollLength: pollLength,
    };

    dispatch(createPolls(payload));
  };

  const [choiceNumbers, setChoiceNumbers] = useState(
    Array.from(Array(2).keys())
  );

  const pollLengthChangeHandler = (e) => {
    if (e.target.id === "days") {
      setPollLength({ ...pollLength, days: e.target.value });
    } else if (e.target.id === "hours") {
      setPollLength({ ...pollLength, hours: e.target.value });
    }
  };

  const addChoiceHandler = () => {
    if (choiceNumbers.length === 6) return;
    const newArray = Array.from(Array(choiceNumbers.length + 1).keys());
    setChoiceNumbers(newArray);
    setChoices([...choices, { text: "" }]);
  };

  const deleteHandler = (choiceNumber) => {
    const newArray = choiceNumbers.filter((item) => item !== choiceNumber);
    setChoiceNumbers(newArray);

    const newChoices = [...choices];
    newChoices.splice(choiceNumber, 1);
    setChoices(newChoices);
  };

  const choiceValueChangeHandler = (e, choiceNumber) => {
    const newChoices = [...choices];
    newChoices[choiceNumber].text = e.target.value;
    setChoices(newChoices);
  };

  const choiceListHtml = (
    <>
      {choiceNumbers.map((choiceNumber, index) => (
        <ChoiceGroup key={index}>
          <Choice
            key={index}
            value={choices[index].text}
            onChange={(e) => choiceValueChangeHandler(e, choiceNumber)}
            id={`choice${choiceNumber + 1}`}
            name={`choice${choiceNumber + 1}`}
            type="text"
            placeholder={`Choice ${choiceNumber + 1}`}
            required={true}
          />
          {choiceNumber > 1 && (
            <Icon key={index} onClick={() => deleteHandler(choiceNumber)}>
              {deleteIcon}
            </Icon>
          )}
        </ChoiceGroup>
      ))}
    </>
  );

  //   const [choices, setChoices] = useState([]);

  const days = Array.from(Array(8).keys());
  const hours = Array.from(Array(24).keys());

  const daysOptions = (
    <select
      name="days"
      id="days"
      value={pollLength.days}
      onChange={(e) => pollLengthChangeHandler(e)}
    >
      {days.map((day) => (
        <option key={day} value={day}>
          {day}
        </option>
      ))}
    </select>
  );

  const hoursOptions = (
    <select
      name="hours"
      id="hours"
      value={pollLength.hours}
      onChange={(e) => pollLengthChangeHandler(e)}
    >
      {hours.map((hour) => (
        <option key={hour} value={hour}>
          {hour}
        </option>
      ))}
    </select>
  );

  return (
    <Wrapper>
      <form action="#" onSubmit={(e) => formSubmitHandler(e)}>
        <h2>Create Poll</h2>
        <textarea
          id="question"
          name="question"
          placeholder="Enter your question"
          maxLength="140"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        ></textarea>
        {choiceListHtml}
        <StyledButton onClick={addChoiceHandler}>+ Add a choice</StyledButton>

        <PollLength>
          <label>Poll Length</label>
          {daysOptions}
          Days
          {hoursOptions}
          Hours
        </PollLength>
        <Button value={"Create Poll"} disabled={false} />
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 35%;
  margin: 5rem auto;
  h2 {
    margin-bottom: 2rem;
  }

  textarea {
    width: 100%;
    height: 20vh;
    border-radius: 0.5rem;
    border-color: lightgrey;
    font-size: 1.8rem;
    padding: 0.5rem;
    border-style: solid;
    color: #909090;
    margin: 1rem 0rem;
    resize: none;
  }
`;

const ChoiceGroup = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  font-size: 2rem;
  padding: 1rem;
  cursor: pointer;
`;

const Choice = styled.input`
  display: block;
  width: 100%;
  height: 4rem;
  border-radius: 0.5rem;
  border-color: lightgrey;
  font-size: 1.8rem;
  padding: 0.5rem;
  border-style: solid;
  color: #909090;
  margin: 1rem 0rem;
`;
const StyledButton = styled.div`
  margin: 2rem auto;
  width: 15rem;
  text-align: center;
  border: 1px dotted #657786;
  padding: 1rem;
  font-size: 1.2rem;
  color: #657786;
  cursor: pointer;
  :hover {
    border: 1px dotted #40a9ff;
    color: #40a9ff;
  }
`;

const PollLength = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 3rem;
  margin: 2rem 0rem;
  font-size: 1.5rem;
  label {
    margin-right: 2rem;
  }
  select {
    margin-left: 1rem;
    margin-right: 0.5rem;
    height: 2.5rem;
    padding: 0.2rem;
    border-radius: 0.5rem;
    border: 1px solid lightgray;
    width: 6rem;
  }
`;

export default CreatePoll;

// {"question":"gfdsffda","choices":[{"text":"gfdsfdsda"},{"text":"fdassafgfsdg"}],"pollLength":{"days":"1","hours":"2"}}
