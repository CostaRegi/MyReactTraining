import React from 'react';
import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <React.Fragment>
        <Projects />
      </React.Fragment>
    </div>
  );
}

export default App;
