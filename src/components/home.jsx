import logo from '../assets/images/logo.svg';
import '../styles/App.css';

function Home() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>WEL-COME</h3>        
        <h4>Learn react-hook-form and react-router-dom</h4>        
        <h5>try editing source code</h5>
      </header>
    </div>
  );
}

export default Home;
