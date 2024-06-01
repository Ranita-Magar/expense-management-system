import React from "react";
import { Progress } from "antd";

const Analytics = ({ allTransaction }) => {
  //total transactions
  const totalTransaction = allTransaction.length;

  const totalIncomeTransaction = allTransaction.filter(
    (transaction) => transaction.type === "income"
  );

  const totalExpenseTransaction = allTransaction.filter(
    (transaction) => transaction.type === "expense"
  );

  const totalIncomePercent =
    (totalIncomeTransaction.length / totalTransaction) * 100;

  const totalExpensePercent =
    (totalExpenseTransaction.length / totalTransaction) * 100;

  //total turnover
  const totalTurnOver = allTransaction.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );

  const totalIncomeTurnover = allTransaction
    .filter((transaction) => transaction.type === "income")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalExpenseTurnover = allTransaction
    .filter((transaction) => transaction.type === "expense")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalIncomeTurnoverPercent =
    (totalIncomeTurnover / totalTurnOver) * 100;

  const totalExpenseTurnoverPercent =
    (totalExpenseTurnover / totalTurnOver) * 100;

  return (
    <>
      <div className="row m-3">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              Total Transactions: {totalTransaction}
            </div>

            <div className="card-body">
              <h5 className="text-success">
                Income:{totalIncomeTransaction.length}{" "}
              </h5>
              <h5 className="text-danger">
                Expense: {totalExpenseTransaction.length}{" "}
              </h5>
            </div>

            <div>
              <Progress
                type="circle"
                strokeColor={"green"}
                className="mx-3 my-3"
                percent={totalIncomePercent.toFixed(0)}
              />

              <Progress
                type="circle"
                strokeColor={"red"}
                className="mx-3 my-3"
                percent={totalExpensePercent.toFixed(0)}
              />
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <div className="card-header">Total Turnover: {totalTurnOver}</div>

            <div className="card-body">
              <h5 className="text-success">Income:{totalIncomeTurnover}</h5>
              <h5 className="text-danger">Expense: {totalExpenseTurnover}</h5>
            </div>

            <div>
              <Progress
                type="circle"
                strokeColor={"green"}
                className="mx-3 my-3"
                percent={totalIncomeTurnoverPercent.toFixed(0)}
              />

              <Progress
                type="circle"
                strokeColor={"red"}
                className="mx-3 my-3"
                percent={totalExpenseTurnoverPercent.toFixed(0)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;