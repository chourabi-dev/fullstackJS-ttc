import React from "react";

class Clock extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            date : new Date()
        }
    }


    componentDidMount(){
        setInterval(()=>{
            

            this.setState(
                { date: new Date() }
            )
            
        },1000)
    }


    getHours(){
         
        return this.state.date.getHours();
    }


    getMinutus(){ 
        return this.state.date.getMinutes();
    }

    getSeconds(){ 
        return this.state.date.getSeconds();
    }

    


    render(){
        return(
            <div>
                <h1>
                    { this.getHours() } : { this.getMinutus() } : { this.getSeconds() }
                </h1>
            </div>
        );
    }
}


export default Clock;