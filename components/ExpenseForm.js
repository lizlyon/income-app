import { useState } from "react";
import styled from "styled-components";

// function to add the expenses and costs
export default function ExpenseForm({ onConfirm }) {
  const [name, setName] = useState("");
  const [cost, setCost] = useState(); // you may need to put a 0 as an argument

  const onConfirmMe = (e) => {
    e.preventDefault();
    onConfirm(name, cost);
    setName("");
    setCost("");
  };

  return (
    <Form onSubmit={onConfirmMe}>
      <input
        value={name}
        type="text"
        required
        placeholder="enter an expense"
        onChange={(e) => setName(e.target.value)}
      />
      <Spacer width={80} />
      <input
        type="int"
        placeholder="enter a cost"
        required
        step="0.01"
        min="0.01"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
      />
      <Spacer width={80} />
      <Button>Add</Button>
    </Form>
  );
}

const Button = styled.button`
  background: transparent;
  width: 100%;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: inherit;
  padding: 10px;
  cursor: pointer;
  border-color: transparent;
  box-shadow: 0 0 5px #719ECE;
  color: var(--green);

  &:hover {
    background-color: var(--green);
    color: white;
    transition-duration: .2s;
    transition-timing-function: cubic-bezier(0,0,.2,1);  }
  }
`;

const Spacer = styled.div`
  width: ${(p) => p.width}px;
`;

const Form = styled.form`
  font-size: 1.4rem;
  text-align: left;
  display: flex;
  flex-direction: row;
  justify-content space-between;
  padding:10px;

  input {
    font-size: 1rem;
    padding: 10px;
    border-radius: 10px;
    letter-spacing: inherit;
    text-transform: lowercase;
    border-color: transparent;
    box-shadow: 0 0 3px #719ECE;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";;
  }

  // small screen 
  @media (max-width: 576px){
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
  }
`;
