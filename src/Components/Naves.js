import axios from "axios";
import { useState, useEffect } from "react";
import '../App.css'
import FichaNave from '../Components/FichaNave.js';

const Naves = () => {
    
    const [datos, setDatos] = useState([]);
    const [count, setCount] = useState(null);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [ficha, setFicha] = useState();
    const [modal, setModal] = useState(false);

    class Nave {
      constructor(name,model,starship_class,manufacturer,cost_in_credits,crew,passengers,cargo_capacity,consumables,length,max_atmosphering_speed,hyperdrive_rating,MGLT,pilots) {
        this.name = name;
        this.model = model;
        this.starship_class = starship_class;
        this.manufacturer = manufacturer;
        this.cost_in_credits = cost_in_credits;
        this.crew = crew;
        this.passengers = passengers;
        this.cargo_capacity = cargo_capacity;
        this.consumables = consumables;
        this.length = length;
        this.max_atmosphering_speed = max_atmosphering_speed;
        this.hyperdrive_rating =hyperdrive_rating;
        this.MGLT=MGLT;
        this.pilots = pilots;

      }
    }
  
    useEffect(() => {
      axios.get('https://swapi.dev/api/starships/?page='+ page) 
      .then(res => {
        setCount(Math.ceil((res.data.count/10)));
        let naves = [];
        res.data.results.map((nave) => {naves.push(new Nave(nave.name, nave.model, nave.starship_class, nave.manufacturer, nave.cost_in_credits, nave.crew, nave.passengers, nave.cargo_capacity, nave.consumables, nave.length, nave.max_atmosphering_speed, nave.hyperdrive_rating, nave.MGLT, nave.pilots))});
        setDatos(naves);
        })
      .finally(() => {setLoading(false)});    
    }
    , [page]); 

    const getData = (nombreNave) => {
      setFicha(datos.filter(nave => nave.name === nombreNave));
      setModal(true);
    }

    console.log(datos);
    console.log(count);
  

    return (
    <div>
      <div className="mainnaves">
        {modal && <FichaNave cerrar={setModal} datos={ficha}/>}
        {loading && <div className="loading"><h3>Loading...</h3></div>}
        {datos.map((naves) => (<ul className="listanaves"><li>Name: {naves.name}</li><li>Model: {naves.model}</li><button onClick={()=>{getData(naves.name)}} className="botoninfo">More info</button></ul>
        ))}
      </div>
      {!loading &&
      <div className="pages">
        {page < count && <button onClick={() => {setPage(page+1)}}> Load More </button>}
        {page >= count && <button onClick={() => {setPage(1)}}> No more ships to show, go back to the first page </button>}
      </div>} 
    </div>
);
}

export default Naves

