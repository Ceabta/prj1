import './App.css';
import SayMyName from './components/SayMyName';
import Pessoas from './components/Pessoas';
import Frase from './components/Frase';
import List from './components/List';

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
      <List />
    </div>
  )
}

export default App
