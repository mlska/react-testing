import "./App.css";
import { Todo } from "./components/Todo";

function App() {
  const todos = [
    { id: 1, desc: "wash dishes", completed: true },
    { id: 2, desc: "do laundry", completed: false },
  ];

  return (
    <div className="App">
      <div style={{ padding: "10px", fontWeight: "bold", fontSize: "36px" }}>
        Todo list
      </div>
      <div style={{ width: "100%" }}>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default App;
