import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPolls } from "../store/actions/pollAction";
import Poll from "./Poll";
import styled from "styled-components";

const Polls = () => {
  const dispatch = useDispatch();
  const pollList = useSelector((state) => state.polls);
  const { content, page, size, totalElements, totalPages, last } = pollList;

  const loginToken = useSelector((state) => state.loginToken);
  const { tokenType, accessToken } = loginToken;

  const [list, setList] = useState([]);

  useEffect(() => {
    setList([...list, ...content]);
  }, [content]);

  useEffect(() => {
    dispatch(getPolls(0, 2));
    setList([]);
  }, [dispatch]);

  const loadMoreHandler = () => {
    dispatch(getPolls(page + 1, 2));
  };

  return (
    <PollList>
      {list.map((poll) => (
        <Poll t={poll} key={poll.id} />
      ))}

      {page !== totalPages - 1 && (
        <Button onClick={loadMoreHandler}>+ Load More</Button>
      )}

      {/* <p>第{page + 1}页</p>
      <p>每页{size}条</p>
      <p>总共{totalElements}条</p>
      <p>总共{totalPages}页</p>
      <p>{last ? "最后一页" : "不是最后一页"}</p> */}
    </PollList>
  );
};

const PollList = styled.div``;

const Button = styled.div`
  margin: 2rem auto;
  width: 10rem;
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

export default Polls;

// {
// 	"content": [
// 		{
// 			"id": 12,
// 			"question": "fdasfasfasf",
// 			"choices": [
// 				{
// 					"id": 27,
// 					"text": "jhgkh.l",
// 					"voteCount": 2
// 				},
// 				{
// 					"id": 28,
// 					"text": "lj,mbj",
// 					"voteCount": 0
// 				}
// 			],
// 			"createdBy": {
// 				"id": 1,
// 				"username": "admin",
// 				"name": "guang shi"
// 			},
// 			"creationDateTime": "2021-02-27T03:51:41Z",
// 			"expirationDateTime": "2021-02-28T03:51:41Z",
// 			"selectedChoice": 27,
// 			"totalVotes": 2,
// 			"expired": false
// 		},
// 		{
// 			"id": 11,
// 			"question": "fdasfas",
// 			"choices": [
// 				{
// 					"id": 25,
// 					"text": "fdsaf",
// 					"voteCount": 1
// 				},
// 				{
// 					"id": 26,
// 					"text": "fdsafa",
// 					"voteCount": 1
// 				}
// 			],
// 			"createdBy": {
// 				"id": 1,
// 				"username": "admin",
// 				"name": "guang shi"
// 			},
// 			"creationDateTime": "2021-02-27T03:30:00Z",
// 			"expirationDateTime": "2021-02-28T03:30:00Z",
// 			"selectedChoice": 26,
// 			"totalVotes": 2,
// 			"expired": false
// 		}
// 	],
// 	"page": 0,
// 	"size": 2,
// 	"totalElements": 11,
// 	"totalPages": 6,
// 	"last": false
// }
