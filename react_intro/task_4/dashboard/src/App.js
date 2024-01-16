import logo from './logo_holberton.png';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="holberton-logo" alt="Holberton Logo" /> 
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label>Email: 
          <input type="email"></input>
        </label>
        <label>Password: 
          <input type="password"></input>
        </label>
        
        <button>OK</button>
      </div>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;
