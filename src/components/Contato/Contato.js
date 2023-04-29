import "./Contato.css";

const Contato = ({ contato, indice, rmContato }) => {
  return (
    <li className="contato_item">
      <ul>
        <li>{contato.nome}</li>
        <li>{contato.telefone}</li>
      </ul>
    </li>
  );
};

export default Contato;
