import React, { useState } from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  const [title, newTitle] = useState(props.title);

  const clickedHandler = () => {
    newTitle("Title Updated");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>

        <button onClick={clickedHandler}>Change Title</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
