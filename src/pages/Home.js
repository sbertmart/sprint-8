import '../App.css';
import imagenHome from '../img/Star_Wars-Logo.wine.svg'

const Home = () => {
    return (
        <div className="home">
            <h2>Welcome to the</h2>
            <img width="500" src={imagenHome}></img>
            <h2>Starship data base</h2>
        </div>
    );
}

export default Home