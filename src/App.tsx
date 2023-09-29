import { useState } from "react";
import "./App.css";

interface BlogPost {
  id: number;
  title: string;
  body: string;
  timestamp: Date;
}

function App() {
  const [count, setCount] = useState(0);

  const post: BlogPost = {
    id: 0,
    title: "Custom dotfile sync across mac devices.",
    body: "lorem ipsum enzo",
    timestamp: new Date("2023-09-29 23:00:00 GMT+1"),
  };

  return (
    <>
      <main>
        <section>
          <h2>Blog posts</h2>
          <article>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <span>{post.timestamp.toISOString()}</span>
          </article>
        </section>
      </main>

      <div>
        <a href="https://vitejs.dev" target="_blank">
          joe
        </a>
        <a href="https://react.dev" target="_blank">
          joe
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
