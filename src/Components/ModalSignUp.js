import '../App.css';
import {useState , useEffect} from "react";
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


const ModalSignUp = (props) => {

    const [users, setUsers] = useState(getLSData());

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errorPass, setErrorPass] = useState(false);
    const [errorName, setErrorName] = useState(false);
    const [mensaje, setMensaje] = useState(false);

   const HandleUserSubmit = (e) => {
    setMensaje(false);
    setError(false);
    setSuccess(false);
    setErrorName(false);
    setErrorPass(false);
    e.preventDefault();
    let iguales = false;
    const sonIguales = users.map(user => {if (user.name === name) {iguales = true;} else {iguales = false;}
    })

    if (iguales === true) {setError(true); setMensaje(true);}
    if (name === "") {setErrorName(true); setMensaje(true);}
    if (password.length < 5) {setErrorPass(true); setMensaje(true);}
    if (iguales === false && name!== "" && password.length>=5) { 
    let user = {
        name,
        password
    }
    setUsers([...users, user]);
    setSuccess(true);
    setMensaje(true);
    }
    setName("");
    setPassword("");
    }

    const abrirUnaYCerrarLaOtra = () => {
        props.cerrar(false);
        props.abrir(true);
    }

   useEffect(() => {

    localStorage.setItem("user", JSON.stringify(users));
   }, [users])


    return (
        
        <div className="modalbackground"> 
        <div className="modalsigncontainer">
            <div className="formsign">
                <form onSubmit={HandleUserSubmit}>
                <h2>Join the force</h2>
                <div className="field">
                <label>Username</label><br/>
                <input value={name} onChange={(e)=> setName(e.target.value)}type="text"></input>
                {errorName && mensaje && <Mensaje error="error" mensaje="The name field is empty"/>}
                </div>
                <div className="field">
                <label>Password</label><br/>
                <input value={password} onChange={(e)=> setPassword(e.target.value)}type="password"></input>
                {errorPass && mensaje && <Mensaje error="error" mensaje="The password must be at least 5 characters long"/>}
                </div>
                <button className="submitbutton" type="submit">Sign Up</button>
                {error && mensaje && <Mensaje error="error" mensaje="This username already exists"/>}
                <div className="sign"><p>Already a member? Do you need to <button onClick={() => {abrirUnaYCerrarLaOtra()}}>Sign In</button>?</p></div>
                {success && mensaje && <button className="accessbutton" onClick={() =>{props.cerrar(false);}}>You have joined the force, so you can access the database</button>}
                </form>
            </div>
        </div>
    </div>  
    );
}


export default ModalSignUp;