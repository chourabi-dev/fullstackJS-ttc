import React from "react";
import { Link } from "react-router-dom";
class HomePage extends React.Component{

    constructor(props){
        super(props);
        this.state={
            articles:[]
        }
    }




    getArticlesFromServer(){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)

                this.setState({
                    articles: result
                })
            })
            .catch(error => console.log('error', error));
    }


    componentDidMount(){
        this.getArticlesFromServer();
    }



    render(){
        return(
            <div>
                <h1>Welcome to home page</h1>

                <h3>Nos articles</h3>

                <ul>
                    {
                        this.state.articles.map((a)=>{
                            return(
                                <li>
                                    <p>

                                        <strong>{a.title}</strong> <br/>
                                        {a.body} <br/>
                                        <Link to= { '/home/details-article/'+a.id+'/'+a.title } >voir details</Link>

                                    </p>

                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}


export default HomePage;