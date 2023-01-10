import './Card.css';
const Card = (props) => {
  return (
    <div className='Card'>
      <div>
        <h1 className='Conteudo'>Conteúdo</h1>
      </div>
      <div>
        <h3>{props.title} </h3>
      </div>
    </div>
  );
};

export default Card;
