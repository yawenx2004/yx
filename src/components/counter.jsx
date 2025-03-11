import React from 'react';
import useStore from '../store';

function Counter(props) {
  const count = useStore((state) => state.count);
  const increment = useStore((state) => state.increment);
  const decrement = useStore((state) => state.decrement);

  return (
    <div>
      <p>
        current count:
        {count}
      </p>
      <div className="buttons">
        <button type="button" className="small-button" onClick={increment}>+</button>
        <button type="button" className="small-button" onClick={decrement}>-</button>
      </div>
    </div>
  );
}

export default Counter;
