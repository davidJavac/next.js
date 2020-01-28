import React, { useState, useRef, useEffect } from 'react';
import {Button} from 'react-bootstrap';
import ListaDestinos from './ListaDestinos.js';
import ListaOrigen from './ListaOrigen.js';
import Flights from './flights.js';
import PropTypes from "prop-types";
import routes from './routes.json';
import epa_cor from './epa-cor.json';
import epa_mdz from './epa-mdz.json';
import './search.css';


const Search = () => {
  /* eslint-disable */
  
  const[isSelectFlight, setIsSelectFlight] = useState(false);
  const [isOrigin, setIsOrigin] = useState(true);
  

  const [codeOrigin, setCodeOrigin] = useState('');
  const [codeDestination, setCodeDestination] = useState('');
  const [cityOrigin, setCityOrigin] = useState('');
  const [cityDestination, setCityDestination] = useState('');

  var arr_origins = [];
  var dict_code_city = useRef({
    'codeOrigin' : '', 'cityOrigin' : '',
    'codeDestination' : '', 'cityDestination' : ''
  });
  
  const arr_destinations = useRef([]);
  const arr_flight = useRef([]);

  Object.keys(routes.routes).forEach(function(key){
    arr_origins.push(routes.routes[key]);
  });

  function seeDestinations(item){
    
    setIsOrigin(false);
    setIsSelectFlight(false);
    setCodeOrigin(item.code);
    setCityOrigin(item.location.cityName);
    Object.keys(item.destinations).forEach(function(key){
      arr_destinations.current.push(item.destinations[key]);
    })
    
  }
  
  function setSelectFlight() {

    
    dict_code_city.current.codeOrigin = codeOrigin;
    dict_code_city.current.cityOrigin = cityOrigin;
    dict_code_city.current.codeDestination = codeDestination;
    dict_code_city.current.cityDestination = cityDestination;
    
    var dataSource = epa_cor.flights.concat(epa_mdz.flights); 
    
    var print = JSON.stringify(dataSource, null, 2);
    console.log("data source " + print);
    
    var flight_exist = false;
    
    Object.keys(dataSource).forEach(function(key){
      
      if((dataSource[key].origin == codeOrigin &&
        dataSource[key].destination == codeDestination) ||
        (dataSource[key].destination == codeOrigin &&
          dataSource[key].origin == codeDestination)){
            flight_exist = true;
            arr_flight.current.push(dataSource[key]);
      }
    });
        
    if(!flight_exist){
      
      alert("No hay vuelos disponibles para el viaje seleccionado");
    }
    else{
      
      setIsSelectFlight(true);
    }
  }
      
  function setDestinations(item){
    
    setCodeDestination(item.code);
    setCityDestination(item.location.cityName);
  }
  
  function search(){
    
    setIsOrigin(true);
    setIsSelectFlight(false);
    setCodeOrigin('');
    setCodeDestination('');
    setCityOrigin('');
    setCityDestination('');
    arr_origins = [];
    arr_destinations.current = [];
    arr_flight.current = [];
    dict_code_city.current.codeOrigin = '';
    dict_code_city.current.cityOrigin = '';
    dict_code_city.current.codeDestination = '';
    dict_code_city.current.cityDestination = '';
    
  }
  
  if(isSelectFlight){
    return(
      
        <>
            <div>
                <Button variant = 'primary' size= 'sm' onClick = {() => search()}>Search</Button>
            </div>
            <Flights arr = {arr_flight.current} dict = {dict_code_city.current}></Flights>
        </>
      
    );
  }
  else if(isOrigin){
    
    return (
      
      <div>
        <div>
          <h6>Seleccione origen</h6>
        </div>
        <ListaOrigen onClick = {(item) => seeDestinations(item)} lista = {arr_origins}></ListaOrigen>
      </div>

    );        
  }
      
  else{
    
    
    return (
        
        <div class = 'descripcion'>
          <h6>Seleccione destino</h6>
          <div>
            <p>Origen: {codeOrigin + "-" + cityOrigin}</p>
            <p>|Destino: {codeDestination + "-" + cityDestination}</p><br></br>
          </div>
          <div class = 'descripcion'>
            <div class = 'content'>
                <Button variant = 'primary' size= 'sm' onClick = {() => search()}>Search</Button>
            </div>
            <div class = 'content'>
              <Button variant = 'success' size = 'sm' onClick = {() => setSelectFlight()}>Flights</Button>
            </div>
          </div>
          <div>
            <ListaDestinos onClick = {(item) => setDestinations(item)} lista = {arr_destinations.current}></ListaDestinos>
          </div>
        </div>
          
    );

  }
}

export default Search;