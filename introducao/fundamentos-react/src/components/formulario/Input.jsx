import React, { useState } from 'react';

const NewValue = (e) => {
  const [valor, setValor] = useState('Inicial');

  const FuncaoChange = (e) => setValor(e.target.value);

  return (
    <div>
      <h2>{valor}</h2>
      Escreva Algo:{' '}
      <input
        value={valor}
        onChange={FuncaoChange}
      />
      <input
        value={valor}
        readOnly
      />
      <input value={undefined} />
    </div>
  );
};
export default NewValue;
