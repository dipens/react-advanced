import React from 'react';
import uuid from 'react-uuid';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [people, setPeople] = React.useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(firstName && email)
    {
      const person = {id:uuid(), firstName, email};
      setPeople((peopleObject) => {
        return [...peopleObject,person];
      });
      setFirstName('');
      setEmail('');
    }
    else {
      console.log('Empty values');
    }
  }
  return (
    <>
    <article>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-contro">
          <label htmlFor="firstName">Name: </label>
          <input 
            id="firstName" 
            type="text" 
            name="firstName" 
            value={firstName} 
            onChange={(e) => {setFirstName(e.target.value)}} 
            >
          </input>
        </div>
        <div className="form-contro">
          <label htmlFor="email">Email: </label>
          <input 
            id="email" 
            type="text" 
            name="email" 
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
            >
            </input>
        </div>
        <button type='submit'>Add Person</button>
      </form>
      <ul>
      {
        people.map((person) => {
          const {id, firstName, email} = person;
          return <li key={id}><div className="item"><h4>{firstName}</h4><p>{email}</p></div></li>
        })
      }
      </ul>
    </article>
    </>
  )
};

export default ControlledInputs;
