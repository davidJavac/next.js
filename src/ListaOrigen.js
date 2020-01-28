import React from 'react';
import Origen from './Origen.js';

class ListaOrigen extends React.Component{

    constructor(props){

        super(props);
    }

    render(){

        return(
            this.props.lista.map(item =>
                <Origen onClick = {() => this.props.onClick(item)} key = {item.code} code = {item.code} location = {item.location.cityName}></Origen>
                )
                
        );
    }
}

export default ListaOrigen;