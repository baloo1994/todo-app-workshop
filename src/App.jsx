import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Lära useState" },
    { id: 2, text: "Se re-render" },
    { id: 3, text: "Exam 2 senare" },
  ]);

  const [draft, setDraft] = useState("");

  function handleChange(e) {
    setDraft(e.target.value);
  }

  function handleClear() {
    setDraft("");
  }

  function handleAdd() {
    const text = draft.trim();
    if (text === "") return;

    const newTodo = { id: Date.now(), text };
    setTodos([...todos, newTodo]);
    setDraft("");
  }

  function handleRemove(idToRemove) {
    const remaining = todos.filter((todo) => todo.id !== idToRemove);
    setTodos(remaining);
  }

  return (
    <main>
      <h1>Övnings-todo</h1>
      <p>Antal uppgifter: {todos.length}</p>
      <input
        type="text"
        value={draft}
        onChange={handleChange}
        placeholder="Skriv uppgift..."
      />
      <button type="button" onClick={handleClear}>
        Rensa
      </button>
      <button type="button" onClick={handleAdd}>
        Lägg till
      </button>
      <p>Kladd just nu: {draft}</p>

      <ul>
        {todos
          .filter((todo) =>
            todo.text.toLowerCase().includes(draft.toLowerCase())
          )
          .map((todo) => (
            <li key={todo.id}>
              {todo.text}{" "}
              <button
                type="button"
                onClick={() => handleRemove(todo.id)}
              >
                Ta bort
              </button>
            </li>
          ))}
      </ul>
    </main>
  );
}

export default App;