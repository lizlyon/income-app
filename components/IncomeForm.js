import { useState } from "react";
import styled from "styled-components";

export default function IncomeForm({ onConfirm }) {
  const [income, setIncome] = useState(); // may need to add a 0 back in

  const onConfirmMe = (e) => {
    e.preventDefault();
    onConfirm(income);
  };

  return (
    <Form onSubmit={onConfirmMe}>
      <input
        value={income}
        required
        placeholder="enter monthly income"
        onChange={(e) => setIncome(e.target.value)}
      />
      <Spacer width={80} />
      {/* <Button>Submit</Button> */}
    </Form>
  );
}

const Form = styled.form`
  font-size: 1.4rem;
  text-align: left;
  display: flex;
  flex-direction: row;
  padding: 10px;

  input {
    min-width: 250px; 
    max-width: 500px;
    font-size: 1rem;
    padding: 10px;
    border-radius: 10px;
    letter-spacing: inherit;
    text-transform: lowercase;
    border-color: transparent;
    box-shadow: 0 0 3px #719ECE;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";;
  }
`;

const Spacer = styled.div`
  width: ${(p) => p.width}px;
`;

// const Button = styled.button`
//   background: transparent;
//   width: 25%;
//   border-radius: 20px;
//   font-size: 1rem;
//   font-weight: 500;
//   text-transform: inherit;
//   letter-spacing: inherit;
//   padding: 5px;
//   cursor: pointer;

//   &:hover {
//     background-color: lightcoral;
//     color: black;
//   }
// `;
