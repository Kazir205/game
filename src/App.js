import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Leftbar from './components/Leftbar/Leftbar';
import Middle from './components/Middle/Middle';
import Rightbar from './components/Rightbar/Rightbar';
import background from '../src/background.jpg'

function App() {
  return (
    <div className="App">
        <Header/>
        <div className="content">
        <div className="left">
          <Leftbar/>
        </div>
        <div className="middle">
          <Middle/>
        </div>
        <div className="right">
          <Rightbar/>
        </div>
        </div>
    </div>
  )
}

export default App;
