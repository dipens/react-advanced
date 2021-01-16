export const reducer = (state, action) => {
  switch(action.type)
  {
    case 'ADD_ITEM':
      const newPeople = [...state.people,action.payload]
      return {...state,people: newPeople, isModalOpen: true, modalContent: 'Item added'}
      case 'NO_VALUE':
        return {...state, isModalOpen: true, modalContent: 'Name Empty'}
      case 'REMOVE_ITEM':
        const newPerson = state.people.filter((person) => person.id !== action.payload)
        return {...state,people: newPerson, isModalOpen: true, modalContent: 'Item removed'}
      case 'CLOSE_MODAL':
        return {...state, isModalOpen: false}
      default:
        throw new Error('No matching action type');
  }
};
export default reducer;