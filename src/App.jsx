import CardBack from "./components/CardBack";
import CardFront from "./components/CardFront";
import Form from "./components/Form";
import { useEffect, useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "updateName":
      return { ...state, cardName: action.payload };
    case "updateNumber":
      return { ...state, cardNumber: action.payload };
    case "updateMonth":
      return {
        ...state,
        cardDate: { ...state.cardDate, month: action.payload },
      };
    case "updateYear":
      return {
        ...state,
        cardDate: { ...state.cardDate, year: action.payload },
      };
    case "updateCvc":
      return { ...state, cardCvc: action.payload };
    default:
      throw new Error("unknown action");
  }
}

const initialValue = {
  cardName: "Jane Appleseed",
  cardNumber: "0000 0000 0000 0000",
  cardDate: {
    month: "00",
    year: "00",
  },
  cardCvc: "000",
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <div className="max-w-md px-5 py-10 space-y-5 mx-auto">
      <Form.Group>
        <Form.Label htmlFor="cardName">Cardholder name</Form.Label>
        <Form.Input
          dispatch={dispatch}
          update="updateName"
          name={state.cardName}
          id="cardName"
          placeholder="e.g. Jane Appleseed"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="cardNumber">Card Number</Form.Label>
        <Form.Input
          dispatch={dispatch}
          update="updateNumber"
          name={state.cardNumber}
          id="cardNumber"
          type="number"
          length={19}
          placeholder="e.g. 1234 5678 9123 0000"
        />
      </Form.Group>
      <div className="flex">
        <Form.Group className="w-1/2">
          <Form.Label htmlFor="month">Exp. date (mm/yy)</Form.Label>
          <div className="flex gap-3">
            <Form.Input
              dispatch={dispatch}
              update="updateMonth"
              name={state.cardDate?.month}
              length={2}
              id="month"
              type="number"
              placeholder="MM"
            />
            <Form.Input
              dispatch={dispatch}
              update="updateYear"
              name={state.cardDate?.year}
              length={2}
              id="year"
              type="number"
              placeholder="YY"
            />
          </div>
        </Form.Group>
        <Form.Group className="w-1/2 pl-10">
          <Form.Label htmlFor="cvc">cvc</Form.Label>
          <Form.Input
            dispatch={dispatch}
            update="updateCvc"
            name={state.cardCvc}
            length={3}
            id="cvc"
            type="number"
            placeholder="e.g. 123"
          />
        </Form.Group>
      </div>
      <Form.Button>Confirm</Form.Button>
      <CardFront {...state} />
      <CardBack cardCvc={state.cardCvc} />
    </div>
  );
}

export default App;
