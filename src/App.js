import React from 'react';
import { Form } from './components/';
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{ margin: '50px' }}>
        <Form onClick={() => console.log('submitted')} />
      </div>
    </div>
  );
}

export default App;
