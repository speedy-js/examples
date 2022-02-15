import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function App() {
  return (
    <div className='container'>
      <p className='text'>Hello React</p>
    </div>
  )
}

ReactDOM.render(
  <App/>, 
  document.getElementById('root')
)