import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  return (
    <div>
      <p className="rounded bg-green-400 text-white text-3xl p-10">
        Hello World
      </p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
