import React from 'react';
import uuid from 'react-uuid';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function
const reducer = (state, action) => {
  switch(action.type)
  {
    case 'ADD_ITEM':
      const newPeople = [...state.people,action.payload]
      return {...state,people: newPeople, isModalOpen: true, modalContent: 'Item added'}
      case 'NO_VALUE':
        return {...state, isModalOpen: true, modalContent: 'Name Empty'}
      default:
        throw new Error('No matching action type');
  }
};
const defaultState = {
  people:data,
  isModalOpen: false,
  modalContent: 'Hello World',
};
const Index = () => {
  const [name,setName] = React.useState('');
  const [state, dispatch] = React.useReducer(reducer,defaultState);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(name) {
      const newItem = {id: uuid(), name};
      dispatch({type:'ADD_ITEM', payload: newItem});
      setName('');
    }
    else {
      dispatch({type:'NO_VALUE'})
    }
  };
  return (
    <>
    {state.isModalOpen && <Modal modalContent={state.modalContent}/>}
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-input">
        <input type = "text" value={name} onChange={(e) => setName(e.target.value)}/>
      </div>
      <button type='submit'>Add</button>
    </form>
    {state.people.map((person) => {
      
      return (
        <div className='item' key={person.id}>
          <h4>{person.name}</h4>
        </div>
      );
    })}
    </>
  );
};

export default Index;
