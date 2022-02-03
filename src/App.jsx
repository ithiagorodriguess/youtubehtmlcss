import './style/App.css';
import Topbar from './components/topBar';
import MenuLateral from './components/menuLateral';
import GradeDeVideos from './components/gradeDeVideos';


function App() {
  return (
    <div className="janelaInteira">
      <Topbar/>
      <div className="laterealVideos">
        <MenuLateral/>
        <GradeDeVideos/>
      </div>
    </div>
  );
}

export default App;
