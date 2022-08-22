import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import SayMyName from './components/SayMyName';
import Pessoas from './components/Pessoas';
import Frase from './components/Frase';
import List from './components/List';
import Evento from './components/Eventos';
import Form from './components/Form';
import Condicional from './components/Condicional';
import OutraLista from './components/OutraLista';
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  const meusItens = ['React','Vue','Angular']

  const [nome, setNome] = useState()

  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase />
      <Frase />
      <SayMyName nome="Matheus"/>
      <SayMyName nome="João"/>
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
      <hr/><hr/>
      {/* ----------------------------------------------------- */}
      <h1>Renderização de Listas</h1>
      <OutraLista itens={meusItens}/>
      <OutraLista itens={[]}/>
      <hr/><hr/>
      {/* ----------------------------------------------------- */}
      <h1>State Lift</h1>
      <SeuNome setNome={setNome} />
      <Saudacao nome={nome}/>
      <hr/><hr/>
      {/* ----------------------------------------------------- */}
      <Router>
        <Navbar />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/empresa" element={<Empresa />} />
        </Routes> 
        <Footer />
      </Router>
    </div>
  )
}

export default App
