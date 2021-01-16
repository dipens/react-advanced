import React from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = React.useState('');
  const [isError, setIsError] = React.useState(false);

  const toggleError = () => {
    setText('');
    setIsError(!isError);
  };
  return (
    <>
    <h1>{text || 'New User' }</h1>
    <button className='btn' onClick={toggleError}>Toggle Error</button>
    <h1>{isError ? <h1>Error...</h1> : <div>There is no error</div>}</h1>
    </>
  );
};

export default ShortCircuit;
