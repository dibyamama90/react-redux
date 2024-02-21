import { createStore } from 'redux';
const INITIAL_VAL = {
  counter: 5,
};
const countReducer = (store = INITIAL_VAL, action) => {
  console.log('dispatch called', action);
  if (action.type === 'INCREMENT') {
    return { counter: store.counter + 1 };
  } else if (action.type === 'DECREMENT') {
    return { counter: store.counter - 1 };
  } else if (action.type === 'ADD') {
    return { counter: store.counter + Number(action.payload.num) };
  } else if (action.type === 'SUBSTRACT') {
    return { counter: store.counter - Number(action.payload.num) };
  }
  return store;
};

const counterStore = createStore(countReducer);
export default counterStore;
