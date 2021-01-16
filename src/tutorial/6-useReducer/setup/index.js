import React from 'react';
import uuid from 'react-uuid';
import Modal from './Modal';
import { data } from '../../../data';
import reducer from './reducer'
// reducer function

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
  const closeModal = () => {
    dispatch({type:'CLOSE_MODAL'});
  }
  return (
    <>
    {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent}/>}
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
          <button type='button' onClick={() => {dispatch({type:'REMOVE_ITEM', payload:person.id})}}>Remove</button>
        </div>
      );
    })}
    </>
  );
};

export default Index;
