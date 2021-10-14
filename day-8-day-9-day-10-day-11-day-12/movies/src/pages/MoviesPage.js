import React from "react";
import MovieCard from "../components/MovieCard";
 


class MoviesPage extends React.Component{
    constructor(props){
        super();
        this.state = {
            movies : []
        }
    }


    getMoviesFromServer( motCle = null ){
 

        var myHeaders = new Headers();
        myHeaders.append("Cookie", "PHPSESSID=50e47haim5abkk6pd2ckb3m2f9");

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        let url = (motCle != null) ? 'https://yts.mx/api/v2/list_movies.json?query_term='+motCle : 'https://yts.mx/api/v2/list_movies.json'

        fetch(url, requestOptions)
        .then(response => response.json())
        .then(result => {
            if (result.data.movies != null) {
                this.setState({
                    movies : result.data.movies
                })
            }
        })
        .catch(error => console.log('error', error));
    }


    componentDidMount(){
        this.getMoviesFromServer();
    }




    render(){
        return(
            <div className="container">
                 
                 <div className="row">
                    <div className="mt-3">
                        <label>Searching for...</label>
                        <input className="form-control" placeholder="movies,tilte,actor..." onChange={ (e)=>{ this.getMoviesFromServer(e.target.value)  } }  />
                    </div>
                 </div>


                 <div className="row mt-5">
                 {
                     this.state.movies.map((m)=>{
                         return <MovieCard coverURL ={m.large_cover_image} title={m.title} id={m.id} />;
                     })
                 }

                  
                    
                 </div>
                  
            </div>
        );
    }
}

export default MoviesPage;