import React, { useReducer } from 'react';

// 型エイリアス
// stateの型用
type StateType = {
  count: number;
};

// actionの型用
type ActionType = {
  // literal型で値を限定
  type: 'increment' | 'decrement' | 'reset';
};

const initialState: StateType = { count: 0 };

// 戻り値はstateなので、stateの型用で定義したものを指定。エラーが投げられる場合は戻り値がないので、ユニオン型でneverも指定しておく
function reducer(state: StateType, action: ActionType): StateType | never {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
}

function CounterWithReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
    </>
  );
}

export default CounterWithReducer;
