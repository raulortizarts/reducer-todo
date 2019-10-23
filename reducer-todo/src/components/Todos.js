import React from "react";

function Todos ({ todo, toggleCompleted }) {

    return (
        <div>
             {todo.map(todo => (
          <div key={todo.id}>
            <h2 className={todo.completed ? "completed" : null}>
              {todo.todo}
            </h2>
            
            <input
              className="input-check"
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleCompleted(todo)}
            />
          </div>

))}
        </div>
    )
}

export default Todos