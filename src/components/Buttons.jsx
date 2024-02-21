import { useRef } from 'react';
import { useDispatch } from 'react-redux';

const Buttons = () => {
  const inputVal = useRef();
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch({ type: 'INCREMENT' });
  };
  const decrementHandler = () => {
    dispatch({ type: 'DECREMENT' });
  };
  const addHandler = () => {
    dispatch({
      type: 'ADD',
      payload: {
        num: inputVal.current.value,
      },
    });
    inputVal.current.value = '';
  };
  const substractHandler = () => {
    dispatch({
      type: 'SUBSTRACT',
      payload: {
        num: inputVal.current.value,
      },
    });
    inputVal.current.value = '';
  };
  return (
    <>
      <div>
        {' '}
        <button
          type="button"
          className="btn btn-primary"
          onClick={incrementHandler}
        >
          ++
        </button>
        &nbsp;
        <button
          type="button"
          onClick={decrementHandler}
          className="btn btn-success"
        >
          ---
        </button>
      </div>
      <div>
        <input type="text" ref={inputVal} placeholder="Enter number" />{' '}
        <button type="button" className="btn btn-primary" onClick={addHandler}>
          add
        </button>
        &nbsp;
        <button
          type="button"
          onClick={substractHandler}
          className="btn btn-success"
        >
          substract
        </button>
      </div>
    </>
  );
};
export default Buttons;
