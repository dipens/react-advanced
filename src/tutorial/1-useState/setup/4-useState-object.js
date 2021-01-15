import React, { useState } from 'react';

const UseStateObject = () => {
  const [person,setPerson] = useState({name: 'Dipen', age: 24, msg:'Random msg'});
  const changeMessage = () => {
    setPerson({...person, msg: 'Hello world'});
  };
  return (
    <>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>{person.msg}</h3>
    <button className="btn" onClick={changeMessage}>Change Message</button>
    </>
  );
};

export default UseStateObject;
