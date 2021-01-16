import React from 'react';
import uuid from 'react-uuid';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const MultipleInputs = () => {
  const [person, setPerson] = React.useState({firstName: '', email: '', age: ''})
  const [people, setPeople] = React.useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(person.firstName && person.email && person.age)
    {
      const newPerson = {...person, id: uuid()};
      setPeople([...people, newPerson]);
      console.log(people)
      setPerson({firstName: '', email: '', age: ''});
    }
    else {
      console.log('Invalid');
    }
  };
  const handleChange = (e) => {
    const id = e.target.name;
    const value = e.target.value;
    setPerson({...person,[id]: value})
  };
  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age : </label>
            <input
              type='age'
              id='age'
              name='age'
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type='submit'>add person</button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email, age } = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{age}</p>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default MultipleInputs;
