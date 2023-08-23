import '../App.css';


const FichaNave = (props) => {

    return (
        
        <div className="modalbackground"> 
            <div className="modalcontainer">
                <div className="closebutton">
                <button onClick={() => {props.cerrar(false)}}> X </button>
                </div>
                <div className="info">
                    <div>
                        <h1>{props.nave[0].name}</h1>
                    </div>
                    <hr/><br/>
                    <div className="imageinfo">
                        <div><img width="400" src={props.nave[0].image}></img></div>
                        <div>
                            <ul className="infonave">
                                <li>Model: {props.nave[0].model}</li>
                                <li>Starship Class: {props.nave[0].starship_class}</li>
                                <li>Manufacturer: {props.nave[0].manufacturer}</li>
                                <li>Cost: {props.nave[0].cost_in_credits}</li>
                            </ul>
                            <hr/>
                            <ul className="infonave">
                                <li>Crew: {props.nave[0].crew}</li>
                                <li>Passenger capacity: {props.nave[0].passengers}</li>
                                <li>Cargo capacity: {props.nave[0].cargo_capacity}</li>
                                <li>Consumables: {props.nave[0].consumables}</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="infonave">
                                <li>Length: {props.nave[0].length}</li>
                                <li>Maximum atmospheric speed: {props.nave[0].max_atmosphering_speedmax_atmosphering_speed}</li>
                                <li>Hyperdrive rating: {props.nave[0].hyperdrive_rating}</li>
                                <li>Maximum speed in real space: {props.nave[0].MGLT}</li>
                            </ul>
                            <ul className="infonave">
                                <li><h3>Pilots</h3></li>
                            </ul>
                            <div className="fotospilotos">
                                {props.nave[0].pilots.map(piloto => piloto = <div><img src={"https://starwars-visualguide.com/assets/img/characters/"+ piloto.replace(/[\D]/g, '') +".jpg"}></img></div>)} 
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    );
}


export default FichaNave;