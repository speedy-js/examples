import React from 'react';
import { Link } from 'react-router-dom';
import './index.less';

const App = (props: { emojis: { name: string; htmlCode: string[] }[] }) => {
  return (
    <>
      <h1>Emojis</h1>
      <Link to="/">go back</Link>
      <ul className="emoji-list">
        {props.emojis.map((emoji) => (
          <li className="emoji-item" key={emoji.name} dangerouslySetInnerHTML={{ __html: emoji.htmlCode[0] }} />
        ))}
      </ul>
    </>
  );
};

export default App;
