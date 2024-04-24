import './App.css';
import { AboutPage } from './pages/aboutPage/AboutPage';
import { MainPage } from './pages/mainPage/MainPage';
import { TodosPage } from './pages/todosPage/TodosPage';



function App() {
  return (
    <div>
      <MainPage/>
      <AboutPage/>
      <TodosPage/>
    </div>
  );
}


export default App;
