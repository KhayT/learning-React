import React, { useState } from "react";
import "./NewExpenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const NewExpenses = (props) => {
  const [currentYear, setCurrentYear] = useState(2022);

  const filterYearHandler = (year) => {
    setCurrentYear(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter onFilterYear={filterYearHandler} />

      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      />
    </Card>
  );
};

export default NewExpenses;
