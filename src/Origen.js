import React from 'react';
import './style_card.css'

class Origen extends React.Component{

    constructor(props){
        super(props);

    }

    render(){
    
        return(
                
            <div onClick = {this.props.onClick} class = 'card'>
                <p><img src = {require('./airport_origin.png')}  height = '30px' width = '30px'></img>{this.props.code + " - " + this.props.location}</p>
                
            </div>
                    
        ) 
    }

}

export default Origen;