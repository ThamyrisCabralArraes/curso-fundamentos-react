export default function ComParametro(props) {
  const status = props.nota > 7 ? 'Aprovado' : 'Reprovado';
  return (
    <div>
      <h3>{props.title}</h3>
      <p>
        <strong>{props.aluno} </strong>tem a nota {props.nota}. Você foi {status}!
      </p>
    </div>
  );
}
