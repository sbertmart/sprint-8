import '../App.css';

const FichaNave = (props) => {
    return (
        <div className="modalbackground"> 
            <div className="modalcontainer">
                <div className="closebutton">
                <button onClick={() => {props.cerrar(false)}}> X </button>
                </div>
                <div className="info">
                    <h1>Nave</h1>
                    <p>Info de lanave</p>
                </div>
            </div>
        </div>  
    );
}


export default FichaNave;