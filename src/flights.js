import React from 'react';
import './flight.css';
import ListaVuelosOutbound from './ListaVuelosOutbound';
import ListaVuelosInbound from './ListaVuelosInbound';

class Flights extends React.Component {

  render(){

    return (
      <div>
        <div class = 'vuelo_outbound'>
            <h6>Seleccione vuelo de ida</h6>
            <ListaVuelosOutbound  lista = {this.props.arr} dict_code_city = {this.props.dict}></ListaVuelosOutbound>
        </div>
        <div class = 'vuelo_inbound'>
            <h6>Seleccione vuelo de vuelta</h6>
            <ListaVuelosInbound  lista = {this.props.arr} dict_code_city = {this.props.dict}></ListaVuelosInbound>
        </div>  
      </div>
  
      );

  }
}
export default Flights;