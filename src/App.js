import logo from './logo.svg';
import './App.css';

import {version} from "./../package.json"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Versión del programa : {version}
        </p>
        <p>
        Supongamos que puedes tocar la ropa y cambiar tu música   
        </p>
        <p>
        Para la Universidad de Valparaiso
        </p>
        <span> New version </span>
        <span> commit </span>
      </header>
    </div>
  );
}

export default App;
 