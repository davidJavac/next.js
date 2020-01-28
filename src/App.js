import React from 'react';
import {Router, Route, Switch, Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import Search from './search';
import history from './history';



class App extends React.Component {
  
  constructor(props){

    super(props);
    
  }

  render(){
    
    return (
        <>
          <div id = 'container'>
            <div>
              <h1>Home Page</h1>    
              <h2>Promotions</h2>
            </div>
            <div>
              <Search></Search>      
            </div>
          </div>
        
      </>
    );

  }
}

export default App;