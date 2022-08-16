import './App.css';
import SayMyName from './components/SayMyName';
import Pessoas from './components/Pessoas';
import Frase from './components/Frase';
import List from './components/List';
import Evento from './components/Eventos';
import Form from './components/Form';
import Condicional from './components/Condicional';

function App() {
  const nome = "Maria"

  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase />
      <Frase />
      <SayMyName nome="Matheus"/>
      <SayMyName nome="João"/>
      <SayMyName nome={nome}/>
      <Pessoas 
        nome="Leonardo" 
        idade="18" 
        profissao="Programador" 
        foto="https://via.placeholder.com/150"
      />
      <hr/><hr/>
      {/* ----------------------------------------------------- */}
      <List />
      <hr/><hr/>
      {/* ----------------------------------------------------- */}
      <h1>Testando Eventos</h1>
      <Evento numero="1"/>
      <Form /> 
      <hr/><hr/>
      {/* ----------------------------------------------------- */}
      <h1>Renderização Condicional</h1>
      <Condicional />
    </div>
  )
}

export default App
