import NavBar from './Component/NavBar';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Hollywood from './Pages/Hollywood';
import Fitness from './Pages/Fitness';
import Food from './Pages/Food';
import Bollywood from './Pages/Bollywood';
import Technoloogy from './Pages/Technoloogy';

function App() {
  return (
    <div className="App">

      <NavBar/>
      <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/bollywood' element={<Bollywood/>}/>
            <Route path='/technology' element={<Technoloogy/>}/>
            <Route path='/hollywood'element={<Hollywood/>}/>
            <Route path='/fitness' element={<Fitness/>}/>
            <Route path='food' element={<Food/>}/>
      </Routes>
    </div>
  );
}

export default App;
