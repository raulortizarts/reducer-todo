import React, { useState, useReducer } from "react";
import { initialState, Reducer } from "../reducers/Reducer";
import Todos from "./Todos";

const Form = () => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    const [input, setInput] = useState("")

    const handleChange = e => {
        setInput(e.target.value);
      }

      const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: "ADD_TODO", payload: input });
        setInput("");
      }

      const toggleCompleted = todo => {
        dispatch({ type: "TOGGLE_COMPLETED", payload: todo.id });
      }
    
      const clearCompleted = () => {
        dispatch({ type: "CLEAR_COMPLETED" });
      }
    return (
      <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="todo" value={input} onChange={handleChange} />
      </form>
      <button onClick={handleSubmit}>
        Add
      </button>
      <button onClick={clearCompleted}>
        Clear Completed
      </button>
      <div>
        <Todos todo={state} toggleCompleted={toggleCompleted} />
      </div>
      </div>
    )
   
}

export default Form