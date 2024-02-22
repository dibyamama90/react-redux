import { useSelector } from 'react-redux';

const DisplayCounter = () => {
  const counter = useSelector((store) => store.counter);
  return (
    <>
      <div>Display Counter Value: {counter}</div>
    </>
  );
};

export default DisplayCounter;
