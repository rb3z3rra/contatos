import { useState } from "react";
import "./ListaContatos.css";
import ContatoForm from "../ContatoForm/ContatoForm";
import Contato from "../Contato/Contato";

const ListaContatos = () => {
  const [contatos, setContatos] = useState([]);

  const addContato = (newContato) => {
    setContatos([...contatos, newContato]);
  };

  return (
    <div className="main">
      <section className="informaContato">
        <ContatoForm onAdd={addContato} />
        {/*É chamado o componente ContatoForm passando uma função como props */}
      </section>

      <section className="listaContatos">
        <ul className="todos">
          {contatos.map((contato, index) => (
            <div>
              <Contato contato={contato} key={index} />
            </div>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ListaContatos;
