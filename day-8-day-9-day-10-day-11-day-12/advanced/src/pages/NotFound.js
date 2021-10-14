import React from "react";
import { Link } from "react-router-dom";
class NotFoundPage extends React.Component{

    constructor(props){
        super(props);
    }




    render(){
        return(
            <div>
                <h1>404 not found, <Link to="/home">back to home</Link> </h1>
            </div>
        );
    }
}


export default NotFoundPage;