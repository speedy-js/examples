import React from 'react';
import ReactDOM from 'react-dom';
import { useEffect, useState } from 'react';

function App() {
  const [answer,setAnswer] = useState('unknown');
  useEffect(() => {
    import('./answer').then(x => {
      setAnswer(x.answer)
    })
  })
  return (
  <div>
    <p>Hello World: {answer}</p>
  </div>
  )
}

ReactDOM.render(
  <App/>, 
  document.getElementById('root')
)