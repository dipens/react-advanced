import React from 'react';

const ShowHide = () => {
  const [show,setShow] = React.useState(false);
  return (
    <>
      <button className="btn" onClick={() => setShow(!show)}>Show/Hide</button>
      {show && <Item/>}
    </>
  );
};

const Item = () => {
  const [size, setSize] = React.useState(window.innerWidth)
  const checkSize = () => {
    setSize(window.innerWidth);
  }
  React.useEffect(() => {
    window.addEventListener('resize', checkSize);
    return () => {window.removeEventListener('resize', checkSize);}
  }, []);
  return (
  <div style={{marginTop: '2rem'}}>
    <h1>Window</h1>
    <h1>Size: {size}</h1>
  </div>
  );

}

export default ShowHide;
