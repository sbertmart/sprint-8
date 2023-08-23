import '../App.css';
import {useState} from "react";
import Mensaje from "../Components/Mensaje";

const getLSData = () => {
    const data = localStorage.getItem("user");
    if(data) {
        return JSON.parse(data);
    }
    else {
        return [];
    }
}


const ModalSignIn = (props) => {

    const [lS, setLocalS] = useState(getLSData());

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [acceso, setAcceso] = useState(false);
    const [mensaje, setMensaje] = useState(false);


    

   const HandleUserSignIn = (e) => {
    
    setMensaje(false);
    e.preventDefault();
    const checkAcceso = lS.map(user => {if(user.name === name && user.password === password) {
        setAcceso(true); setMensaje(true);} else {setAcceso(false); setMensaje(true);}})
    setName("");
    setPassword("");

    }

    const abrirUnaYCerrarLaOtra = () => {
        props.cerrar(false);
        props.abrir(true);
    }
    

    return (
        
        <div className="modalbackground"> 
        <div className="modalsigncontainer">
            <div className="formsign">
                <form onSubmit={HandleUserSignIn}>
                <h2>Log In</h2>
                <p>Log into your Star Wars account. If you don't have one, you will be prompted to create one.</p><br/>
                <div className="field">
                <label>Username</label><br/>
                <input value={name} onChange={(e)=> setName(e.target.value)}type="text"></input>
                </div>
                <div className="field">
                <label>Password</label><br/>
                <input value={password} onChange={(e)=> setPassword(e.target.value)}type="password"></input>
                </div>
                <button className="submitbutton" type="submit">Sign In</button>
                <div className="sign"><p>Do you need to <button onClick={() => {abrirUnaYCerrarLaOtra()}}>Sign Up</button>?</p></div>
                {!acceso && mensaje && <Mensaje error="error" mensaje="Keep trying"/>}
                {acceso && <button className="accessbutton" onClick={() => {props.cerrar(false)}}>Click for full access</button>}
                </form>
            </div>
        </div>
    </div>  
    );
}


export default ModalSignIn;