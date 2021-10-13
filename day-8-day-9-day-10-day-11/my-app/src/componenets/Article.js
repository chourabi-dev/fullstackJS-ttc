import React from "react";
import LikeButton from "./LikeButton";
class ArticleBloc extends React.Component{
    constructor(props){
        super(props);
 
        this.state = {
            content:props.content,
            date:props.date,
            nbrLikes:props.nbrLikes,
            didLike:props.didLike,
            
        }
    }

 





    render(){
        return(
           <div>
               <small>{this.state.date.toString()}</small>
               <p>
               {this.state.content}
               </p>
                <hr/>

                <LikeButton nbrLikes={this.state.nbrLikes} didLike={this.state.didLike} />


           </div>
        );
    }
}


export default ArticleBloc;