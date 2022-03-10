import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './index.css';

const App: React.FC = ({}) => {
  React.useEffect(() => {
    console.log('useEffect called');
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>pages/index/index.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://speedy.web.bytedance.net/ssr/introduction.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            SSR Docs
          </a>
        </p>
        <p>
          <Link className="App-link" to="/demo">
            SSR Demo
          </Link>
        </p>
      </header>
    </div>
  );
};

export default App;
