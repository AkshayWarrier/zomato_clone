import './App.css';
import Topbar from '../Topbar/Topbar';
import Header from '../Header/Header';
import Restraunts from '../Restaurants/Restraunts';

function App() {
  return (
    <div className="App">
          <Topbar />
          <Header/>
          <Restraunts/>
    </div>
  );
}

export default App;
