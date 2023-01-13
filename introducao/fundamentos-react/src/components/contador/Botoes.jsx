import React from 'react';

const Botoes = (props) => {
  return (
    <div>
      <button
        onClick={props.incrementar}
        className='my-bnt'
      >
        {' '}
        +
      </button>
      <button
        onClick={props.decrementar}
        className='my-bnt'
      >
        {' '}
        -
      </button>
    </div>
  );
};
export default Botoes;
