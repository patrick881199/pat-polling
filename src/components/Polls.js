import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPolls } from "../store/actions/pollAction";
import Poll from "./Poll";

const Polls = () => {
  const dispatch = useDispatch();
  const pollList = useSelector((state) => state.polls);
  const { content, page, size, totalElements, totalPages, last } = pollList;
  useEffect(() => {
    dispatch(getPolls());
  }, [dispatch]);
  return (
    <>
      {content.map((poll) => (
        <Poll poll={poll} />
      ))}
      <p>第{page}页</p>
      <p>每页{size}条</p>
      <p>总共{totalElements}条</p>
      <p>总共{totalPages}页</p>
      <p>{last ? "最后一页" : "不是最后一页"}</p>
    </>
  );
};

export default Polls;
