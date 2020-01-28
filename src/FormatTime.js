import React from 'react';

class FormatTime extends React.Component{

    constructor(props){

        super(props);
    }

    render(){

        var hora = new Date(this.props.hora);

        return(

            <span>{hora.getHours() + ":" + ((hora.getMinutes()<10?'0':'') + hora.getMinutes())}</span>
        );
    }
}

export default FormatTime;