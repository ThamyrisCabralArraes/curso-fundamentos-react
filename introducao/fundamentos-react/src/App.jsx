import React from 'react';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/basicos/layout/Card';

const App = () => {
  return (
    <div>
      Ola, Usuario!!
      <p>
        <Card title='Exemplo Card'></Card>
        <Aleatorio
          min={10}
          max={60}
        ></Aleatorio>
        <Fragmento></Fragmento>
        <ComParametro
          title='Segundo titulo'
          aluno='Carlos'
          nota={5}
        ></ComParametro>
        <ComParametro
          title='Segundo titulo'
          aluno='Thamyris'
          nota={10}
        ></ComParametro>
        <Primeiro />
      </p>
    </div>
  );
};
export default App;
