import logo from "./logo.svg";
import "./App.css";

function App() {
  function demo(num) {
    return num + 10;
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reacts demo
        </a>
      </header>
      <h1>{demo(10)}</h1>
    </div>
  );
}

export default App;
