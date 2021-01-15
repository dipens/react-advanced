import React from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    if(value >= 1 ) document.title = `Counter value: ${value}`
  },[value]);
    React.useEffect(() => {
    document.title = 'Initial load'
  },[]);
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => {setValue(value+1)}}>Increase</button>
    </>
  );
};

export default UseEffectBasics;
