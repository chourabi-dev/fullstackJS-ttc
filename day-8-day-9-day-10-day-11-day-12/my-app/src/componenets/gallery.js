import React from "react";
class Gallery extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            photos : props.photos,
            currentIndex : 0
        }


        console.log(this.state);
    }



    componentDidMount(){
        setInterval(() => {
            
            if (this.state.currentIndex +1 === this.state.photos.length) {
                this.setState({
                    currentIndex: 0
                })
            }else{
                this.setState({
                    currentIndex: (this.state.currentIndex +1 )
                })
            }

        }, 3000);
    }



    render(){
        return (
            <div>
                <img width="200" src={ this.state.photos[this.state.currentIndex] } />
            </div>
        );
    }
}

export default Gallery;