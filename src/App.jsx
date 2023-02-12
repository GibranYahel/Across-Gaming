import './App.css'
import { 
  Routes,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';
import { Home } from './pages/Home';
import { Partners } from './pages/Partners';
import { Perfil } from './pages/Perfil';
import { Productos } from './pages/Productos';
import { Registrate } from './pages/Registrate';
import { Social } from './pages/Social';
import { Clicktester } from './pages/Clicktester';
import { Skins } from './pages/Skins';


function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/partners" element={ <Partners /> }/>
          <Route path="/perfil" element={ <Perfil /> }/>
          <Route path="/productos" element={ <Productos /> }/>
          <Route path="/registrate" element={ <Registrate /> }/>
          <Route path="/social" element={ <Social /> }/>
          <Route path="/clicktester" element={ <Clicktester /> }/>
          <Route path="/Skins" element={ <Skins /> }/>
        </Routes>
      </div>
    </Router>
  );
  }

export default App
