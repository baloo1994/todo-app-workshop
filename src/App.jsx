import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    "Lära useState",
    "Se re-render",
    "Ta helg kl 16",
  ]);
  const [draft, setDraft] = useState("");

  function handleChange(e) {
    setDraft(e.target.value);
  }

  function handleAdd() {
    const text = draft.trim();
    if (text === "") return;
    setTodos([...todos, text]);
    setDraft("");
  }

  return (
    <main>
      <h1>Min Todo-app</h1>
      <p>Antal uppgifter: {todos.length}</p>
      <input
        type="text"
        value={draft}
        onChange={handleChange}
        placeholder="Ny uppgift"
      />
      <button type="button" onClick={handleAdd}>
        Lägg till
      </button>
      <ul>
        <li>{todos[0]}</li>
        <li>{todos[1]}</li>
        <li>{todos[2]}</li>
      </ul>
    </main>
  );
}

export default App;