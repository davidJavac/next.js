import React from 'react';
import FormatTime from './FormatTime.js';
import './style_card.css'

class FlightCard extends React.Component{

    constructor(props){
        super(props);

    }

    render(){
        var hora_salida = new Date(this.props.departureDate);
        var hora_llegada = new Date(this.props.arrivalDate);
        
        var duracion = (hora_llegada.getTime() - hora_salida.getTime())/1000/60; 

        return(
            <> 
                <div  class = 'card'>
                    <div>
                        {hora_salida.toDateString()}
                    </div>
                    <div>
                        <div>
                            <img src = {require('./airport_origin.png')}  height = '30px' width = '30px'></img>
                            <span>${this.props.price}</span>
                        </div>
                        {this.props.codeOrigin + " - " + this.props.origin + "  "}
                        <FormatTime hora = {this.props.departureDate}></FormatTime>

                    </div>
                    <div>
                        {this.props.codeDestination + " - " + this.props.destination + "  "} 
                        <FormatTime hora = {this.props.arrivalDate} ></FormatTime>
                    </div>
                    <div>
                        {duracion + " min"}
                    </div>
                </div>
                
            
            </>
                    
        ) 
    }

}

export default FlightCard;