import React from "react";
class ArticleDetails extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            id : props.match.params.id,
            title : props.match.params.title,
        }
    }

    componentDidMount(){
        console.log(this.props);
    }




    render(){
        return(
            <div>
                <h1>About to show artilce N° {this.state.id} details : { this.state.title }</h1>
            </div>
        );
    }
}


export default ArticleDetails;