import './App.css';
import BemVindo from './components/BemVindo/BemVindo';
import ListaContatos from './components/ListaContatos/ListaContatos';
function App() {
  return (
    <div className="App">
      <BemVindo/>
      <ListaContatos/>
    </div>
  );
}

export default App;
