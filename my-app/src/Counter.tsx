import React, { useState } from 'react';

const Counter: React.FC<{}> = () => {
  // useStateは useState<> で型指定。ジェネリクスで渡した型引数がstateの型になる。
  const [count, setCount] = useState<number>(0);

  const addCount = () => {
    setCount((prev) => prev + 1);
  };

  const subCount = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <p>value: {count}</p>
      <button onClick={addCount}>+1</button>
      <button onClick={subCount}>-1</button>
    </div>
  );
};

export default Counter;
