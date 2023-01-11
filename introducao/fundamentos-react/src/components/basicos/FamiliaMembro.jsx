import React from 'react';

const FamiliaMembro = (props) => {
  return (
    <span>
      {props.name} <strong>{props.sobrenome} </strong> <br />
    </span>
  );
};
export default FamiliaMembro;
