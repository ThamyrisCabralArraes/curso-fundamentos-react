const numberRandom = (props) => {
  const { min, max } = props;
  const random = Math.floor(Math.random() * (max - min) + min);
  return (
    <div>
      <h2>Numero aleatorio:</h2>
      <p>Valor min: {min} </p>
      <p>Valor max: {max} </p>
      <p>Valor: {random} </p>
    </div>
  );
};

export default numberRandom;
