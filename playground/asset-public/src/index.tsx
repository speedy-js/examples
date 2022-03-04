import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Logo from './logo.png';
function App() {
  return (
  <div>
    <p>Hello World</p>
    <img src={Logo}></img>
  </div>
  )
}

ReactDOM.render(
  <App/>, 
  document.getElementById('root')
)