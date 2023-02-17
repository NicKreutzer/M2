import React from "react";

class Botones extends React.Component{
    render(){
        return(
            <div>
                <button onClick={() => alert('Tu mensaje')}>"Módulo 1"</button>
                <br></br>
                <button onClick={() => alert('Tu mensaje')}>"Módulo 2"</button>
            </div>
        )
    }
}