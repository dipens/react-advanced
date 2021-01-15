import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  return (
    <>
    {
      people.map((person) => {
        const {id,name} = person;
        return <div key={id} className='item'>
          <h4>{name}</h4>
          <button className='' type="button" onClick={() => setPeople(people.filter(persons => id !== persons.id))} >Clear Item</button>
        </div>
      })
    }
    <button className='btn' type="button" onClick={() => setPeople([])} >Clear Items</button>
    </>
  )
};

export default UseStateArray;
