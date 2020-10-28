import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js'

function App() {
  return (
    <div className="App">
      <Header />
        <img src={logo} className="App-logo" alt="logo" />
        <Footer />
    </div>
  );
}

export default App;
