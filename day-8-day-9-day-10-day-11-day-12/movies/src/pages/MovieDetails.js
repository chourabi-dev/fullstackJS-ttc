import React from "react";
class MovieDetails extends React.Component{
    constructor(props){
        super();
        this.state= {
            id: props.match.params.id,
            movie : null
        }
    }


    getMovieDetailsFromServer(){
        var myHeaders = new Headers();
        myHeaders.append("Cookie", "PHPSESSID=50e47haim5abkk6pd2ckb3m2f9");

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("https://yts.mx/api/v2/movie_details.json?movie_id="+this.state.id, requestOptions)
        .then(response => response.json())
        .then(result => {
            this.setState({
                movie: result.data.movie
            })
        })
        .catch(error => console.log('error', error));
    }


    componentDidMount(){
        this.getMovieDetailsFromServer();
    }



    render(){
        return(
            <div>
                {
                    this.state.movie === null ?
                    <div className="mt-5 text-center">
                        <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    :
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-sm-3">
                                <img className="w-100" src={ this.state.movie.large_cover_image } />
                            </div>
                            <div className="col-sm-9">
                                <h1>{this.state.movie.title}</h1>
                                <p> {this.state.movie.description_full} </p>

                                {

                                   
                                    this.state.movie.torrents.map((t)=>{
                                        return <a className="btn btn-primary" href={t.url} download style={{ marginRight: 15 }} > {t.quality} </a>
                                    })
                                }
                            </div>
                            

                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default MovieDetails;