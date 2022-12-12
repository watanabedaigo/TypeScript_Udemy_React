import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

interface AppProps {
  message: string;
  name: string;
}

// 引数にて分割代入を用いて変数に特定のプロパティの値を格納してしまう
// 関数コンポーネントは :React.FC<> で型指定。ジェネリクスで渡した型引数がpropsの型になる。引数で何も指定しない場合はからのオブジェクトを渡す。
const App: React.FC<AppProps> = ({ message, name }) => {
  return (
    <div className="App">
      <p>{name}</p>
      <p>{name}</p>
      <div>
        <Counter />
      </div>
    </div>
  );
};

// 値が渡されなかった際のデフォルトのpropsを設定することができる
App.defaultProps = {
  message: 'defaultProps',
};

export default App;
