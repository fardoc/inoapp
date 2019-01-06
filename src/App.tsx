import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Label from "./components/Label/Label";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Label>お試しラベル</Label>
        </header>
      </div>
    );
  }
}

export default App;
