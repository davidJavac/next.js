import React from 'react';
import Destino from './Destino.js';

class ListaDestinos extends React.Component{

    constructor(props){

        super(props);
    }

    render(){

        return(
            this.props.lista.map(item =>
                <Destino onClick = {() => this.props.onClick(item)} key = {item.code} code = {item.code} location = {item.location.cityName}></Destino>
                )
        );
    }
}

export default ListaDestinos;