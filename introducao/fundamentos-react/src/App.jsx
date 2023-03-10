import './App.css';
import React from 'react';

import Mega from './components/Mega/Mega';
import Contador from './components/contador/Contador';
import Input from './components/formulario/Input';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import DiretaPai from './components/comunicacao/DiretaPai';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import ParOuImpar from './components/condicional/ParOuImpar';
import ListaProdutos from './components/Repeticao/TabelaProdutos';
import ListaAlunos from './components/Repeticao/ListaAlunos';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/basicos/layout/Card';

const App = () => {
  return (
    <div className='App'>
      Fundamentos React!
      <div className='Cards'>
        <Card
          title='#13- Nova'
          color='#48cd90'
        ></Card>
        <Card
          title='#13- Sorteio de números'
          color='#E45F56'
        >
          <Mega />
        </Card>
        <Card
          title='#12- Contador'
          color='#ebe985'
        >
          <Contador numeroInicial={2} />
        </Card>
        <Card
          title='#11- Component Controlado (Input)'
          color='#ffbbcb'
        >
          <Input />
        </Card>
        <Card
          title='#10- Comunicação Indireta'
          color='#5939bc'
        >
          {' '}
          <IndiretaPai />
        </Card>
        <Card
          title='#09- Comunicação Direta'
          color='#588090'
        >
          {' '}
          <DiretaPai />
        </Card>
        <Card
          title='#08- Par ou impar'
          color='#982390'
        >
          <UsuarioInfo usuario={{ nome: 'Fernando' }} />
          <UsuarioInfo usuario={{ email: 'Fer@nando' }} />
          <ParOuImpar numero={20} />
        </Card>
        <Card
          title='#07- Lista de Produtos'
          color='#FF432E'
        >
          <ListaProdutos />
        </Card>
        <Card
          title='#06- Lista de Alunos'
          color='#FF4C65'
        >
          <ListaAlunos />
        </Card>
        <Card
          title='#05.5- Componentes Filhos'
          color='#00C8F8'
        >
          <Familia sobrenome='Arraes'>
            <FamiliaMembro name='Thamyris' />

            <FamiliaMembro name='Carlos' />

            <FamiliaMembro name='Luffy' />
          </Familia>
        </Card>
        <Card
          title='#05- Desafio Aleatorio'
          color='#9fd3c7'
        >
          <Aleatorio
            min={10}
            max={60}
          ></Aleatorio>
        </Card>
        <Card
          title='#04- Fragmento'
          color='#ffcbcb'
        >
          <Fragmento />
        </Card>
        <Card
          title='#03- Com Parametro'
          color='#8ef6e4'
        >
          <ComParametro
            title='#02- Segundo titulo'
            aluno='Carlos'
            nota={10}
            />
        </Card>
        <Card
          title='#01- Primeiro exemplo'
          color='#feffdf'
        >
          <Primeiro />
        </Card>
      </div>
    </div>
  );
};
export default App;
