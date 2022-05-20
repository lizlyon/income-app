import styled from "styled-components";

// function that will output the expenses
export default function Expenses({ expenses, onRemove }) {
  return expenses.map((expense, index) => {
    return (
      <Wrapper>
        <div class="list">
          {expense.name} - ${expense.cost}
          <button onClick={() => onRemove(index)}>x</button>
        </div>
      </Wrapper>
    );
  });
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  padding: 10px;

  button {
    border-radius: 20px;
    font-size: 1rem;
    font-weight: 500;
    width: 10%;
    height: 10%;
    text-transform: inherit;
    letter-spacing: inherit;
    padding: 10px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    box-shadow: 0 0 5px #719ECE;
    color: var(--green);

    &:hover {
      background-color: lightcoral;
      color: white;
      transition-duration: .2s;
      transition-timing-function: cubic-bezier(0,0,.2,1);
    }
  }
`;