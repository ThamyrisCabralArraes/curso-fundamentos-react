import React from 'react';
import DiretaFilho from './DiretaFilho';

const DiretaPai = () => {
  return (
    <div>
      <DiretaFilho
        nome='Carlos'
        idade={10}
        nerd={true}
      ></DiretaFilho>
      <DiretaFilho
        nome='Thamyris'
        idade={10}
        nerd={false}
      ></DiretaFilho>
    </div>
  );
};
export default DiretaPai;
