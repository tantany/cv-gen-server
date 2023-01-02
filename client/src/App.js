import React, { useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import photo from './images/bg.jpg';

function App() {
  const [output, setOutput] = useState("");

  return (
    <div className="app">
      <header className="header">
      </header>
      <section className="section">
        <div className="wrapper">
          <Header />
          <Form
            setOutput={setOutput} 
          />
          {output && 
            <h3 className="result">Here's your snapped experience:</h3>
          }
          {output && output.map((line, index) => {
            return(
              <p className="output" key={index}>{line}</p>
            )
          })}
          {output && 
            <button className="copy-button"
              onClick={() => navigator.clipboard.writeText(output.join(" "))}>
              Copy to clipboard
            </button>
          }
        </div>
        <img className="image" src={photo} alt="happy" />
      </section>
    </div>
  );
}

export default App;
