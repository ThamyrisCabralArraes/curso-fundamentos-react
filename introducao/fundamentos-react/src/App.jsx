import './App.css';
import React from 'react';

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
      Curso React!
      <div className='Cards'>
        <Card
          title='#05- Componentes Filhos'
          color='#00C8F8'
        >
          <Familia sobrenome='Arraes'>
            <FamiliaMembro name='Thamyris'></FamiliaMembro>

            <FamiliaMembro name='Carlos'></FamiliaMembro>

            <FamiliaMembro name='Luffy'></FamiliaMembro>
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
          <Fragmento></Fragmento>
        </Card>
        <Card
          title='#03- Com Parametro'
          color='#8ef6e4'
        >
          <ComParametro
            title='#02- Segundo titulo'
            aluno='Carlos'
            nota={10}
          ></ComParametro>
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
