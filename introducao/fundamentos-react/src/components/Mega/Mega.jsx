import React, { useState } from 'react';
import numerosSorteados from './mega.js';
import Botao from './botao';
import './Mega.css';

const MegaSena = () => {
  const [valor, setValor] = useState([]);
  const [inputValor, setInputValor] = useState({
    sorteio: 1,
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
      <h2>Numeros sorteados</h2>
      <p>
        {valor.map((numero) => (
          <span
            id='bola-no-numero'
            key={numero}
          >
            {numero}{' '}
          </span>
        ))}
      </p>

      <div>
        Quantidade de numeros sorteados:
        <input
          id='input-mega'
          type='number'
          name='sorteio'
          min={1}
          max={6}
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
        />{' '}
        <button className='button-mega'>Enviar</button>
      </div>
    </div>
  );
};

export default MegaSena;
