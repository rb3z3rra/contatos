import "./ContatoForm.css";
import { useState } from "react";

const ContatoForm = ({ onAdd }) => {
  const [contato, setContato] = useState({
    nome: "",
    telefone: "",
  });

  const handleOnChangeNome = (event) => {
    const novoNome = event.target.value;
    setContato({ ...contato, nome: novoNome }); // Cada vez que houver mudança no input será alterado o valor de inputText
  };

  const handleOnChangePhone = (event) => {
    const novoPhone = event.target.value;
    setContato({ ...contato, telefone: novoPhone });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd(contato);
    setContato({ ...contato, nome: "", telefone: "" });
  };
  return (
    <form className="contato-form" onSubmit={handleSubmit}>
      <label htmlFor="nome">
        Nome:
        <input
          id="nome"
          value={contato.nome}
          onChange={handleOnChangeNome}
          placeholder="Nome do Contato"
        />
      </label>
      <label htmlFor="telefone">
        Telefone:
        <input
          id="telefone"
          value={contato.telefone}
          onChange={handleOnChangePhone}
          placeholder="(##)#####-####"
        />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContatoForm;
