import React from 'react';
import ReactDOM from 'react-dom';
import 'virtual:windi.css';

function App() {
  return (
    <div>
      <p className="rounded bg-green-400 text-white text-3xl p-10">
        Hello World1
      </p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
