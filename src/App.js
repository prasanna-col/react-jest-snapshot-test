import logo from './logo.svg';
import './App.css';

import Button from './component/button/button'

import Newbutton from './component/newbutton'
import SearchInput from './component/searchInput'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React JS
        </a>

        <Button label="click me"/>
        <Newbutton />
        <SearchInput />
      </header>
    </div>
  );
}

export default App;
