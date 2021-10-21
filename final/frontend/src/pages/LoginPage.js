import React from "react";
import { Link } from "react-router-dom";


class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',

            errorMsg: '',
        }
    }


    signin() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({ "email": this.state.email, "password": this.state.password });

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
                    localStorage.setItem('key', result.key);
                    this.props.history.push('/home')
                } else {
                    this.setState({
                        errorMsg:result.message
                    })
                }

            })
            .catch(error => console.log('error', error));
    }


    render() {
        return (
            <div className="container">


                <div className="row justify-content-center">

                    <div className="col-xl-10 col-lg-12 col-md-9">

                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">

                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                            </div>
                                            <form className="user" onSubmit={ (e)=>{
                                                e.preventDefault();

                                                this.signin();
                                            } } >
                                                <div class="form-group">
                                                    <input type="email" class="form-control form-control-user" id="exampleInputEmail"
                                                        placeholder="Email Address" onChange={(e) => { this.setState({ email: e.target.value }) }} />
                                                </div>
                                                <div class="form-group row">
                                                    <div class="col-sm-12 mb-3 mb-sm-0">
                                                        <input type="password" class="form-control form-control-user"
                                                            id="exampleInputPassword" placeholder="Password" onChange={(e) => { this.setState({ password: e.target.value }) }} />
                                                    </div>

                                                </div>

                                                <button type="submit" class="btn btn-primary btn-user btn-block">
                                                    Login
                                                </button>
                                                <hr />



                                                {
                                                    this.state.errorMsg !== '' ?
                                                        <div className="alert alert-danger">
                                                            {
                                                                this.state.errorMsg
                                                            }
                                                        </div> :
                                                        <div></div>
                                                }



                                            </form>
                                            <hr />
                                            <div class="text-center">
                                                <a class="small" href="forgot-password.html">Forgot Password?</a>
                                            </div>
                                            <div class="text-center">
                                                <Link class="small" to="/create-account">Create an Account!</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        );
    }
}

export default LoginPage;