import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import '../App.css';
import Home from '../pages/Home.js'
import Starships from '../pages/Starships.js'
import Starwarslogo from '../img/Star_Wars-Logo.wine.svg'

function App() {
  return (
   <div>
    <div className="starwarslogo">
      <img height="200" src={Starwarslogo}></img>
    </div>
    <BrowserRouter>
    <header>
      <nav className="menu">
        <NavLink className="menuitems" to="/">Home</NavLink>
        <NavLink className="menuitems" to="/starships">Starships</NavLink>
      </nav>
    </header>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/starships/" element={<Starships/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  </div>
  );
}

export default App;
