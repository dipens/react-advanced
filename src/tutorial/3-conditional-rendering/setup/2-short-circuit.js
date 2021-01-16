import React from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = React.useState('');
  const firstValue = text || 'New User';
  const secondValue = text && 'hello world';


  return (
    <>
    <h1>{firstValue}</h1>
    <h1>{secondValue}</h1>
    <h1>{text || 'New User' }</h1>
    <h1>{text && <h1>'New User'</h1> }</h1>
    </>
  );
};

export default ShortCircuit;
