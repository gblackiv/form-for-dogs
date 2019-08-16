import React from 'react';
import { Form } from './components/';
import Logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{ margin: '50px' }}>
        <img src={Logo} alt="Logo" />
        <Form onClick={() => {}} />
      </div>
    </div>
  );
}

export default App;
