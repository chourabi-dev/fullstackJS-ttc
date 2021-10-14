import React from "react";
class LikeButton extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            didLike : props.didLike,
            nbrInitLikes: props.nbrLikes
        }
    }


    hundleClickEvent(){
        this.setState({
            
            nbrInitLikes : this.state.didLike === false ? ( this.state.nbrInitLikes +1 ) : ( this.state.nbrInitLikes -1 ),
            didLike: ! this.state.didLike,
        })
    }





    render(){
        return(
            <button onClick= { ()=>{
                this.hundleClickEvent();
            } } > {this.state.nbrInitLikes} { this.state.didLike === false ? 'Like':'Dislike' }</button>
        );
    }
}


export default LikeButton;