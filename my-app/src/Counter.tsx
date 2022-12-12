import React, { useState, useRef, useEffect } from 'react';

const Counter: React.FC<{}> = () => {
  // useStateは useState<> で型指定。ジェネリクスで渡した型引数がstateの型になる。
  const [count, setCount] = useState<number>(0);

  const addCount = () => {
    setCount((prev) => prev + 1);
  };

  const subCount = () => {
    setCount((prev) => prev - 1);
  };

  // useRefは useRef<> で型指定。ジェネリクスで渡した型引数がcurrentプロパティの型になる。
  // 値保持の場合
  const renderimes = useRef<number>(0);
  useEffect(() => {
    renderimes.current += 1;
  });

  // DOM参照の場合
  // ref属性を指定した要素のref属性にホバーすると型が出てくるのでそれを使用
  const ref = useRef<HTMLInputElement>(null);
  const focusInput = () => {
    if (ref.current !== null) ref.current.focus();
    // or
    // オプショナルにすることで、nullか否かで処理が分かれる
    // ref.current?.focus();
  };
  // Non-Null Assertion Operator
  // const ref = useRef<HTMLInputElement>(null!);
  // const focusInput = () => {
  //   ref.current.focus();
  // };

  return (
    <div>
      <p>value: {count}</p>
      <button onClick={addCount}>+1</button>
      <button onClick={subCount}>-1</button>
      <p>This component was re-rendered {renderimes.current} times</p>
      <input ref={ref} type="text" />
      <button onClick={focusInput}>Focus input</button>
    </div>
  );
};

export default Counter;
