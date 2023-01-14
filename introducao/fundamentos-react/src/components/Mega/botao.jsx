import React from 'react';

const Botao = (props) => {
  return (
    <div>
      <button
        id='button-mega'
        onClick={props.mudarNumero}
      >
        click
      </button>
    </div>
  );
};

export default Botao;
