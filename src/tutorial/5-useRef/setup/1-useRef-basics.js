import React from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = React.useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
    console.log(refContainer.current.id);
  };
  
  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer} id="refid"/>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default UseRefBasics;
