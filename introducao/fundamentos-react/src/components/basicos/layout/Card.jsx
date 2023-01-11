import './Card.css';
const Card = (props) => {
  const cardstyle = {
    backgroundColor: props.color,
  };
  return (
    <div className='Card'>
      <div>
        <h1 className='Title'>{props.title}</h1>
      </div>
      <div
        className='Conteudo'
        style={cardstyle}
      >
        <h3>{props.children} </h3>
      </div>
    </div>
  );
};

export default Card;
