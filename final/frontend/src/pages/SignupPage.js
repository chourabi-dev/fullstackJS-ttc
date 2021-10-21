import React from "react";


class SignupPage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            firstname : '',
            lastname : '',
            email : '',
            password : '',

            errorMsg : '',
            successMsg : '',
            
            
        }
    }



    signup(){
        this.setState({
            errorMsg:'',
            successMsg:''
        })
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"email":this.state.email,"password":this.state.password,"firstname":this.state.firstname,"lastname":this.state.lastname});

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://localhost:8080/api/signup", requestOptions)
        .then(response => response.json())
        .then(result =>{
            if (result.success === true) {
                this.setState({
                    successMsg:'Your account is created successfully, you can  login is now !'
                })
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
            <div class="container">

        <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
                
                <div class="row">
                    <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
                    <div class="col-lg-7">
                        <div class="p-5">
                            <div class="text-center">
                                <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                            </div>
                            <form class="user" onSubmit={ (e)=>{
                                e.preventDefault();

                                this.signup();
                            } } >
                                <div class="form-group row">
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                        <input type="text" class="form-control form-control-user" id="exampleFirstName"
                                            placeholder="First Name" onChange={ (e)=>{ this.setState({firstname:e.target.value}) } } />
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control form-control-user" id="exampleLastName"
                                            placeholder="Last Name" onChange={ (e)=>{ this.setState({lastname:e.target.value}) } } />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control form-control-user" id="exampleInputEmail"
                                        placeholder="Email Address" onChange={ (e)=>{ this.setState({email:e.target.value}) } }/>
                                </div>
                                <div class="form-group row">
                                    <div class="col-sm-12 mb-3 mb-sm-0">
                                        <input type="password" class="form-control form-control-user"
                                            id="exampleInputPassword" placeholder="Password" onChange={ (e)=>{ this.setState({password:e.target.value}) } }/>
                                    </div>
                                     
                                </div>
                                <button  type="submit" class="btn btn-primary btn-user btn-block">
                                    Register Account
                                </button> 

                                {
                                    this.state.errorMsg !== '' ?
                                    <div className="alert alert-danger">
                                        {
                                            this.state.errorMsg
                                        }
                                    </div>:
                                    <div></div>
                                }

                                {
                                    this.state.successMsg !== '' ?
                                    <div className="alert alert-success">
                                        {
                                            this.state.successMsg
                                        }
                                    </div>:
                                    <div></div>
                                }




                            </form>
                            <hr/>
                            <div class="text-center">
                                <a class="small" href="forgot-password.html">Forgot Password?</a>
                            </div>
                            <div class="text-center">
                                <a class="small" href="login.html">Already have an account? Login!</a>
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

export default SignupPage;