import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [messageFromServer, setMessageFromServer] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/message");
      const data = await response.json();
      setMessageFromServer(data.message);
    };

    fetchData().catch((e) => console.error(e));
  }, []);

  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Golang + Vite + React!!!!!!!</h1>
      <h2>{messageFromServer}</h2>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  );
}

export default App;
