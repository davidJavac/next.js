import React from 'react';
import FlightCard from './FlightCard';

class ListaVuelosInbound extends React.Component{

    constructor(props){

        super(props);
    }

    render(){
    
        return(
            this.props.lista.filter(item => item.origin == this.props.dict_code_city.codeDestination).map(item =>
                
                <FlightCard  
                key = {item.flightNo} 
                price = {item.fares[0].prices.afterTax}
                codeOrigin = {item.origin}
                codeDestination = {item.destination}
                departureDate = {item.departureDate} arrivalDate = {item.arrivalDate}
                origin = {this.props.dict_code_city.cityDestination}
                destination = {this.props.dict_code_city.cityOrigin}>
                                </FlightCard>
                    
                    
                )
                
        );
    }
}

export default ListaVuelosInbound;