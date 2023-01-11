import React, { cloneElement } from 'react';

const Familia = (props) => {
  return (
    <div>
      {React.Children.map(props.children, (child) => {
        return cloneElement(child, props);
      })}
    </div>
  );
};

export default Familia;

// {
//   /* <FamiliaMembro
//         name='Thamyris'
//         sobrenome={props.sobrenome}
//       ></FamiliaMembro>
//       <br />
//       <FamiliaMembro
//         name='Carlos'
//         {...props}
//       ></FamiliaMembro>
//       <br />
//       <FamiliaMembro
//         name='Luffy'
//         sobrenome='Arraes'
//       ></FamiliaMembro> */
// }
