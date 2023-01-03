import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Blog from './components/Blog';

function App() {
  return (
    <div className="App">
      <Header />
      <Blog author="Daniels" title='damn' content='Elisandra jesus' created_at='jurasick park' />
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
      </header>
    </div>
  );
}

export default App;