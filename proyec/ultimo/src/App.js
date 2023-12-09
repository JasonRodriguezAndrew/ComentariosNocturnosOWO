import './App.css';
import logo from './img/log.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './componentes/Login.jsx'
import CuestionarioCard from './componentes/Card.jsx';

function App() {
  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img
           className='logo'
           src={logo}
           alt='Logo'
          />
      </div>
      <header className="App-header">
      
      <div className='login-container'>  
        <Login />
      </div>

      <CuestionarioCard />  
      </header>
    </div>
  );
}

export default App;