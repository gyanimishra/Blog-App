import react from "react";
import {Routes,Route} from 'react-router-dom'
import './main.scss';
import Home from './components/Home';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
        <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>} /> 
        <Route path='/register' exact element={<Register/>} /> 
        <Route path='/login' exact element={<Login/>} /> 
   
      </Routes>
     
    </div>
  );
}

export default App;
