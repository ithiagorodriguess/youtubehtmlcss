import './style/App.css';
import Topbar from './components/topBar';
import MenuLateral from './components/menuLateral';
function App() {
  return (
    <div className="janelaInteira">
      <Topbar/>
      <MenuLateral/>
    </div>
  );
}

export default App;
