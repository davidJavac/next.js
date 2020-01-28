import React from 'react';
import './style_card.css';

class Destino extends React.Component{

    constructor(props){
        super(props);
        
        /*$('document').ready(function(){

            $('div').on('click', function(){

                $('div').removeClass('selected');
                $(this).addClass('selected');
            })
        });*/
    }

    
    render(){
        
        return(
                
            <div tabindex="-1" onClick = {this.props.onClick} class = 'card'>
                <p ><img class = 'imagen' src = {require('./airport_destino.png')}  height = '30px' width = '30px'></img>
                {this.props.code + " - " + this.props.location}</p>
            </div>
            
                    
        ) 
    }

}

export default Destino;