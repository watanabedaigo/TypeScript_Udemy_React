import React from 'react';
import logo from './logo.svg';
import './App.css';

interface AppProps {
  message: string;
  name: string;
}

// 引数にて分割代入を用いて変数に特定のプロパティの値を格納
// 関数コンポーネントは :React.FC<> で型指定。ジェネリクスで渡した型引数がpropsの型になる。
const App: React.FC<AppProps> = ({ message, name }) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{name}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {message}
        </a>
      </header>
    </div>
  );
};

// 値が渡されなかった際のデフォルトのpropsを設定することができる
App.defaultProps = {
  message: 'defaultProps',
};

export default App;
