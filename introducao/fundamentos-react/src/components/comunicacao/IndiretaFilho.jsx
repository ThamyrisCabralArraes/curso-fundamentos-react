import React from 'react';

const IndiretaFilho = (props) => {
  const cb = props.quandoClicar;
  const min = 20;
  const max = 50;
  const randomIdade = () => parseInt(Math.random() * (max - min) + min);
  const randomNerd = () => Math.random() > 0.5;
  return (
    <div>
      <button onClick={() => cb('Carlos', randomIdade(), randomNerd())}>
        {' '}
        Clique para informacoes
      </button>
    </div>
  );
};
export default IndiretaFilho;
