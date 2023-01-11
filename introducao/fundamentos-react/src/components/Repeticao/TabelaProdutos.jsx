import './TabelaProdutos.css';
import React from 'react';
import Produtos from '../../data/produtos';

const ListaProdutos = () => {
  const produtos = Produtos.map((produto, i) => {
    return (
      <tr
        key={produto.id}
        className={i % 2 === 0 ? 'Par' : ''}
      >
        <td>{produto.id} - </td>
        <td>{produto.produto}</td>
        <td>R$ {produto.preco}</td>
      </tr>
    );
  });

  return (
    <div className='tabelaProdutos'>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Produto</th>
            <th>Preço</th>
          </tr>
          {produtos}
        </thead>
        <tbody> </tbody>
      </table>
    </div>
  );
};

export default ListaProdutos;
