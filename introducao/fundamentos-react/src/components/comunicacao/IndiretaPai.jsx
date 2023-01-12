import React, { useState } from 'react';
import IndiretaFilho from './IndiretaFilho';

const IndiretaPai = () => {
  const [nome, setNome] = useState('?');
  const [idade, setIdade] = useState(0);
  const [nerd, setNerd] = useState(false);

  const FornecerDados = (nome, idade, nerd) => {
    setNome(nome);
    setIdade(idade);
    setNerd(nerd);
  };

  return (
    <div>
      <div>
        <p>Nome: {nome}</p>
        <p>Idade: {idade}</p>
        <p>Nerd: {nerd ? 'Verdadeiro' : 'False'}</p>
      </div>
      <IndiretaFilho quandoClicar={FornecerDados}></IndiretaFilho>
    </div>
  );
};
export default IndiretaPai;
