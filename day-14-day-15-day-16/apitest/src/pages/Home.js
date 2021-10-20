import React from "react";

class HomePage extends React.Component{
    constructor(props){
        super(props);
    }


    componentDidMount(){
        console.log(this.props);

        // if localstorge
        if (localStorage.getItem('key')) {
            // 50 %

            // appel server n please , verify this token 
            const token = localStorage.getItem('key');

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", token);
 

            var requestOptions = {
            method: 'GET',
            headers: myHeaders, 
            redirect: 'follow'
            };

            fetch("http://localhost:8080/employees", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.success === false) {
                    localStorage.clear();
                    alert('session expired')
                    this.props.history.push('/login');
                }
            })
            .catch(error => console.log('error', error));

        }else{
            // redirect to /login
            this.props.history.push('/login');
        }
    }


    render(){
        return(
            <div>
                <h1>home page</h1>
            </div>
        );
    }
}

export default HomePage;