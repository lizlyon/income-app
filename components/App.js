import { useState, useEffect } from "react";
// import supabase
import { supabase } from "../lib/supabase"
//import { useStickyState } from "../hooks/useStickyState" 
import ExpenseForm from "./ExpenseForm";
import Expenses from "./Expenses";
import IncomeForm from "./IncomeForm";
import styled from "styled-components";


export default function App({user}) {

    // to persist data use stickyState
    // const [data, setData] = useStickyState([], 'gratitudes');

    // const [income, setIncome] = useStickyState(null);
    // const [expenses, setExpenses] = useStickyState([], 'expenses');

  const [income, setIncome] = useState(null);
  const [expenses, setExpenses] = useState([]);

  // added error and loading f()
  //const [error, setError] = useState(null)
  //const [loading, setLoading] = useState(true)

  // new 
  // useEffect(() => {
  //   fetchIncome(),
  //   fetchExpenses()
  // }, [loading])

  // add new function to fetch income
  // const fetchIncome = async () => {
  //   let { data: income, error } = await supabase
  //       .from('expenses') // table name
  //       .select('income') 
  //   if (error) setError(error.message)
  //   else {
  //     setIncome(income)
  //     setLoading(false)
  //   }
  // }

  // add new function to fetch expenses
  // const fetchExpenses = async () => {
  //   let { data: expense, expcost, error } = await supabase
  //       .from('expenses') // table name
  //       .select('expense', 'expcost') 
  //   if (error) setError(error.message)
  //   else {
  //       setExpenses(expense)
  //       setLoading(false)
  //   }
  // }

  const addExpense = (name, cost) => {
    setExpenses([
      ...expenses,
      {
        name,
        cost
      }
    ]);
  };

  //new function 
  // const addIncome = async (income) => {
  //   if (income.length) {
  //     setLoading(true)
  //     let { income, error } = await supabase
  //       .from('expenses')
  //       .insert([
  //       { id: user.id, income: income},
  //       ])
  //     if (error) setError(error.message)
  //     else { 
  //         setLoading(false)
  //     }
  //   }
  // }

  //new function 
  // const addExpense = async (expense, expcost) => {
  //   /**
  //    * Sends a gratitude to our Supabase table
  //    * and triggers a re-run of our gratitude fetching,
  //    * so that the client updates with this new gratitude.
  //    */
  //   if (expense.length) {
  //     setLoading(true)
  //     let { expense, error } = await supabase
  //       .from('expenses')
  //       .insert([
  //       { id: user.id, expense: expense, expcost: expcost},
  //       ])
  //     if (error) setError(error.message)
  //     else { 
  //         setLoading(false)
  //     }
  //   }
  // }

  // function that removes the expense based on index
  const removeExpense = (index) => {
    setExpenses(
      expenses.filter((expense, i) => {
        return index !== i;
      })
    );
  };

  // resset tehe income and expense back to null or an empty array
  const reset = () => {
    setIncome(null);
    setExpenses([]);
  };

  // new 
//   if (loading) {
//     return <Wrapper>
//         <Border>
//             <h1>Income App</h1>
//             <p>Hello, {user.email}</p>
//             <p>Loading...</p>
//             </Border>
//         </Wrapper>
// }

// new
// if (error) {
//     return <Wrapper>{JSON.stringify(error)}</Wrapper>
// }

  return (
    <Wrapper>
      <h1>Income and Expense Tracker</h1>
      <Border>
        <h2>Welcome {user.email} </h2>
        <div>
          {income === null && (
            <IncomeForm onConfirm={(newIncome) => setIncome(newIncome)} />
          )}

          {income !== null && <span>${income}</span>}

          {(income !== null || expenses.length > 0) && (
            <div class="remaining">
              Remaining Income: $
              {income -
                expenses.reduce((acc, expense) => {
                  return +expense.cost + acc;
                }, 0)}
            </div>
          )}
          <Spacer></Spacer>
          {/* call the expense form */}
          <ExpenseForm onConfirm={addExpense} />
          <Expenses expenses={expenses} onRemove={removeExpense} />
          <Spacer></Spacer>
          {(income !== null || expenses.length > 0) && (
            <Button onClick={reset}>Reset All</Button>
          )}
          <Spacer></Spacer>
        </div>
      </Border>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  h1 {
    margin: 0;
    padding-top: 0;
    padding-bottom: 50px;
    color: var(--parchment);
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";;
  }

  div {
    font-size: 25px;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }
`;

const Border = styled.div`
  background-color: white;
  color: var(--rose);
  height: min(90%, 900px);
  border-radius: 20px 20px 20px 20px;
  padding: 10px 30px 10px 30px;
  flex: 1;
  max-width: min(100%, 900px);

  .remaining {
    display: flex;
    flex-direction: row;
  }
`;
const Spacer = styled.div`
  padding: 5px;
`
const Button = styled.button`
  background: transparent;
  width: 100%;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: 500;
  text-transform: inherit;
  letter-spacing: inherit;
  padding: 10px;
  cursor: pointer;
  border-color: transparent;
  box-shadow: 0 0 5px #719ECE;
  color: var(--rose);

  &:hover {
    background-color: var(--rose);
    color: white;
    transition-duration: .2s;
    transition-timing-function: cubic-bezier(0,0,.2,1);  
  }
`;
