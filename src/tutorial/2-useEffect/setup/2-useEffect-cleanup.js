import React from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = React.useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  }
  React.useEffect(() => {
    window.addEventListener('resize', checkSize);
    return () => {
      window.removeEventListener('resize', checkSize);
    }
  });
  return (
  <>
  <h1>Window size</h1>
  <h1>{size} px</h1>
  </>);
};

export default UseEffectCleanup;
