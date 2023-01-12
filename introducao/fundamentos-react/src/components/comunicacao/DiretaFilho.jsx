import React from 'react';

const DiretaFilho = (props) => {
  return (
    <div>
      <div> Nome: {props.nome}</div>
      <div> Idade: {props.idade}</div>
      <div>
        {' '}
        Nerd: {props.nerd ? 'Verdadeiro' : 'Falso'}
        <br />
        .....
      </div>
    </div>
  );
};

export default DiretaFilho;
