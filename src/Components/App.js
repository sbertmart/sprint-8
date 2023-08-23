import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import {useState} from "react";
import '../App.css';
import Home from '../pages/Home.js'
import Starships from '../pages/Starships.js'
import Starwarslogo from '../img/Star_Wars-Logo.wine.svg'
import ModalSignIn from '../Components/ModalSignIn'
import ModalSignUp from '../Components/ModalSignUp'


const App = () => {

  const [signUp, setSignUp] = useState(false);
  const [signIn, setSignIn] = useState(false);

  return (
   <div>
    <div>
      <div className="headerstarwars">
        <div className="lateral">
        </div>
        <div className="starwarslogo">
          <img height="200" src={Starwarslogo}></img>
        </div>
        <div className="lateral">
          <button onClick={()=>{setSignUp(true); setSignIn(false)}}>Sign Up</button>&nbsp;|&nbsp;<button onClick={()=>{setSignIn(true); setSignUp(false);}}>Sign In</button>
        </div>
      </div>  
      <div className="navigation">      
        <BrowserRouter>
          <header>
            <nav className="menu">
              <NavLink onClick={() =>{setSignIn(false);}}className="menuitems" to="/">Home</NavLink>
              <NavLink onClick={() => {setSignIn(true);}} className="menuitems" to="/starships">Starships</NavLink>
            </nav>
          </header>
          <div>  
            <main>
            {signUp && <ModalSignUp cerrar={setSignUp} abrir={setSignIn}/>}
            {signIn && <ModalSignIn cerrar={setSignIn} abrir={setSignUp}/>}
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/starships/" element={<Starships/>}/>
            </Routes>
            </main>
          </div>  
        </BrowserRouter>
      </div>
    </div>
  </div>    
  );
}

export default App;
