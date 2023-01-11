import React from 'react';
import If from './if';

const UsuarioInfo = (props) => {
  const usuario = props.usuario || {};
  return (
    <div>
      <If test={usuario && usuario.nome}>Seja bem vindo, {usuario.nome}!</If>
      <If test={!usuario || !usuario.nome}>Seja bem vindo, Usuario!</If>
    </div>
  );
};

export default UsuarioInfo;
