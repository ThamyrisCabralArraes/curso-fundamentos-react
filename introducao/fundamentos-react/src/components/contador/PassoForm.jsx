import React from 'react';

const PassoForm = (props) => {
  return (
    <div>
      <label htmlFor='passos'>
        {' '}
        Passos:
        <input
          id='passos'
          type='number'
          value={props.passo}
          onChange={(e) => props.setPassos(+e.target.value)}
        />
      </label>
    </div>
  );
};
export default PassoForm;
