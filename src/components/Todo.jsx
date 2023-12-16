import React from "react";

export const Todo = ({ todo }) => {
  const { id, desc, completed } = todo;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem 5rem",
      }}
      data-testid={`todo-${id}`}
    >
      <div>
        {completed ? (
          <strike data-id={id}>{desc}</strike>
        ) : (
          <span data-id={id}>{desc}</span>
        )}
      </div>
      <button>X</button>
    </div>
  );
};
