import React, { useState } from 'react';
import numerosSorteados from './mega.js';
import Botao from './botao';
import './Mega.css';

const MegaSena = () => {
  const [valor, setValor] = useState([]);
  const [inputValor, setInputValor] = useState({
    sorteio: 0,
    nome: '',
    email: '',
  });

  const NewNumber = () => {
    const { sorteio } = inputValor;
    const numeros = numerosSorteados(sorteio);
    setValor(numeros);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputValor((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const { sorteio, email, nomes } = inputValor;

  return (
    <div>
      <h1>Numeros sorteados</h1>
      {valor.map((numero) => (
        <span key={numero}>{numero} -</span>
      ))}

      <div>
        Quantidade de numeros sorteados:
        <input
          id='input-mega'
          type='number'
          name='sorteio'
          value={sorteio}
          onChange={handleChange}
        />
        <Botao mudarNumero={NewNumber}></Botao>
        <hr />
        Nome:{' '}
        <input
          className='input-meda2'
          type='text'
          name='nomes'
          value={nomes}
          onChange={handleChange}
        />
        <br />
        Email:{' '}
        <input
          className='input-meda2'
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default MegaSena;
