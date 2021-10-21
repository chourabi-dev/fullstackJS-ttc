import React from "react";
import { Link } from "react-router-dom";


class AddNewProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title:'',
            price:'',
            code:'',
            weight:'',
            quantity:''
            
        }
    }



    saveProduct(){
        // API !! call
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", localStorage.getItem('key'));

        var raw = JSON.stringify(
            this.state
        );

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://localhost:8080/api/product/add", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);


            if (result.success === true) {
                // redirect to products page
                this.props.history.push('/products');
            }
        })
        .catch(error => console.log('error', error));
    }




    render() {
        return (


            <section>

                <div id="wrapper">

                    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">


                        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                            <div className="sidebar-brand-icon rotate-n-15">
                                <i className="fas fa-laugh-wink"></i>
                            </div>
                            <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                        </a>


                        <hr className="sidebar-divider my-0" />


                        <li className="nav-item">
                            <Link className="nav-link" to="/products">
                                <i className="fas fa-fw fa-tachometer-alt"></i>
                                <span>Mes produits</span></Link>
                        </li>








                    </ul>

                    <div id="content-wrapper" className="d-flex flex-column">


                        <div id="content">


                            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">


                                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                                    <i className="fa fa-bars"></i>
                                </button>



                                <ul className="navbar-nav ml-auto">


                                    <li className="nav-item dropdown no-arrow d-sm-none">
                                        <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fas fa-search fa-fw"></i>
                                        </a>

                                        <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                            aria-labelledby="searchDropdown">

                                        </div>
                                    </li>






                                    <li className="nav-item dropdown no-arrow">
                                        <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                                            <img className="img-profile rounded-circle"
                                                src="img/undraw_profile.svg" />
                                        </a>

                                        <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                            aria-labelledby="userDropdown">
                                            <a className="dropdown-item" href="#">
                                                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                                Profile
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                                Settings
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                                Activity Log
                                            </a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                                Logout
                                            </a>
                                        </div>
                                    </li>

                                </ul>

                            </nav>



                            <div className="container-fluid">


                                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                    <h1 className="h3 mb-0 text-gray-800">Products</h1>
                                    <Link to="/products/add" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-plus fa-sm text-white-50"></i> Ajouter</Link>
                                </div>


                                <div className="card shadow mb-4">
                                    <div className="card-header py-3">
                                        <h6 className="m-0 font-weight-bold text-primary">Ajouter un produit</h6>
                                    </div>
                                    <div className="card-body">
                                            <div className="mb-3">
                                                <label>Nom d'article</label>
                                                <input className="form-control" onChange={ (e)=>{ this.setState({ title:e.target.value }) } } />
                                            </div>
                                            <div className="mb-3">
                                                <label>Prix</label>
                                                <input className="form-control" type="number" onChange={ (e)=>{ this.setState({ price:e.target.value }) } } />
                                            </div>
                                            <div className="mb-3">
                                                <label>CODE</label>
                                                <input className="form-control" onChange={ (e)=>{ this.setState({ code:e.target.value }) } } />
                                            </div>
                                            <div className="mb-3">
                                                <label>Poids</label>
                                                <input className="form-control" type="number" onChange={ (e)=>{ this.setState({ weight:e.target.value }) } } />
                                            </div>
                                            <div className="mb-3">
                                                <label>Quantity</label>
                                                <input className="form-control" type="number" onChange={ (e)=>{ this.setState({ quantity:e.target.value }) } } />
                                            </div>

                                            <div className="mb-3">
                                                <button className="btn btn-success" onClick={ ()=>{ this.saveProduct() } }>Ajouter</button>
                                            </div>
                                             
                                    </div>
                                </div>


                            </div>


                        </div>



                        <footer className="sticky-footer bg-white">
                            <div className="container my-auto">
                                <div className="copyright text-center my-auto">
                                    <span>Copyright &copy; Your Website 2020</span>
                                </div>
                            </div>
                        </footer>

                    </div>


                </div>



                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fas fa-angle-up"></i>
                </a>


                <div className="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                                <a className="btn btn-primary" href="login.html">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>



            </section>
        );
    }
}

export default AddNewProduct;