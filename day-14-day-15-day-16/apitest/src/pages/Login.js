import React from "react";

class LoginPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            error:''
        }

    }


    auth(){
        console.log("about to connect");
        console.log(this.state);

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(this.state);

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://localhost:8080/api/signin", requestOptions)
        .then(response => response.json())
        .then(result => {
            if (result.success === true) {
                localStorage.setItem('key',result.key);

                this.props.history.push('/home');

                // go to home !!

            } else {
                this.setState({
                    error: result.message
                })
            }
        })
        .catch(error => console.log('error', error));
    }


    render(){
        return(
            <div>
                <h1>Login page</h1>
                <div>
                    <label>Username</label>
                    <input type="text" onChange={ (e)=>{ this.setState({username:e.target.value}) } } />
                </div>


                <div>
                    <label>Password</label>
                    <input type="text" onChange={ (e)=>{ this.setState({password:e.target.value}) } } />
                </div>

                <button  onClick={()=>{
                    this.auth();

                }} >Connect</button> <br />

                {
                    this.state.error !== '' ? <p>{this.state.error}</p> : <p></p>
                }

                
            </div>
        );
    }
}

export default LoginPage;