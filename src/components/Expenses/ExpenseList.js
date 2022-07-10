import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./ExpenseList.css";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";

const ExpenseList = (props) => {
  const expenses = props.expenses.map((expense) => {
    return (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    );
  });

  const [filterYear, setFilterYear] = useState("2020");
  const changeFilterYearHandler = (year) => {
    setFilterYear(year);
    console.log(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          yearShown={filterYear}
          onFilterYearChange={changeFilterYearHandler}
        />
        {expenses}
      </Card>
    </div>
  );
};

export default ExpenseList;
