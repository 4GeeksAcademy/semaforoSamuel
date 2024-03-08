
import "../../styles/Semafaro.css"
import React, {useState} from "react"

function Semafaro () {

    const[luzRed,setluzRed]= useState("");
    const[luzYellow,setluzYellow]= useState("");
    const[luzGreen,setluzGreen]= useState("");

    function Luz (boton) {
        if (boton=="Red"){
            setluzRed("10px 10px 10px 10px #C7FF33")
            setluzYellow("")
            setluzGreen("")
        }

        if (boton=="Yellow"){
            setluzRed("")
            setluzYellow("10px 10px 10px 10px #C7FF33")
            setluzGreen("")
        } 
        
        if (boton=="Green"){
            setluzRed("")
            setluzYellow("")
            setluzGreen("10px 10px 10px 10px #C7FF33")
        }
    }

    return (
        <div className="container">
            <button className=" Rojo" type="button" onClick={()=>Luz("Red")} style={{boxShadow:luzRed}}></button>
        
            <button className="Amarillo" type="button" onClick={()=>Luz("Yellow")}style={{boxShadow:luzYellow}}></button>
        
            <button className="Verde" type="button" onClick={()=>Luz("Green")}style={{boxShadow:luzGreen}}></button>
        
        </div>
    );
};

export default Semafaro;