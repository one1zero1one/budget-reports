import Budget from "./components/Budget";
import CurrentMonth from "./components/CurrentMonth";
import Payees from "./components/Payees";
import IncomeVsExpenses from "./components/IncomeVsExpenses";
import NetWorth from "./components/NetWorth";
import Projections from "./components/Projections";

export default [
  { path: "", title: "Current Month", Component: CurrentMonth },
  { path: "/spending-by-category", title: "Current Month by Category", Component: Budget },
  { path: "/payees", title: "Payees", Component: Payees },
  {
    path: "/income-vs-expenses",
    title: "Income vs Expenses",
    Component: IncomeVsExpenses
  },
  { path: "/net-worth", title: "Net Worth", Component: NetWorth },
  { path: "/projections", title: "Retirement Calculator", Component: Projections }
];
