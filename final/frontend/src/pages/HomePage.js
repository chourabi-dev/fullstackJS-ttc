import React from "react"; 
import { Link } from "react-router-dom";


class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
 
        }
    }


 


    render() {
        return (

             
            <section>

<div id="wrapper">
         
         <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
 
              
             <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                 <div class="sidebar-brand-icon rotate-n-15">
                     <i class="fas fa-laugh-wink"></i>
                 </div>
                 <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
             </a>
 
             
             <hr class="sidebar-divider my-0" />
 
             
             <li class="nav-item">
                 <Link class="nav-link" to="/products">
                     <i class="fas fa-fw fa-tachometer-alt"></i>
                     <span>Mes produits</span></Link>
             </li>
  
             
            
  
 
         </ul>
        
         <div id="content-wrapper" class="d-flex flex-column">
 
          
             <div id="content">
 
              
                 <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
 
                   
                     <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                         <i class="fa fa-bars"></i>
                     </button>
 
                     
                   
                     <ul class="navbar-nav ml-auto">
 
                        
                         <li class="nav-item dropdown no-arrow d-sm-none">
                             <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                                 data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                 <i class="fas fa-search fa-fw"></i>
                             </a>
                            
                             <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                 aria-labelledby="searchDropdown">
                                  
                             </div>
                         </li>
 
                    
                         
 
                          
                          
                         <li class="nav-item dropdown no-arrow">
                             <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                 data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                 <span class="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                                 <img class="img-profile rounded-circle"
                                     src="img/undraw_profile.svg" />
                             </a>
                           
                             <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                 aria-labelledby="userDropdown">
                                 <a class="dropdown-item" href="#">
                                     <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                     Profile
                                 </a>
                                 <a class="dropdown-item" href="#">
                                     <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                     Settings
                                 </a>
                                 <a class="dropdown-item" href="#">
                                     <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                     Activity Log
                                 </a>
                                 <div class="dropdown-divider"></div>
                                 <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                     <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                     Logout
                                 </a>
                             </div>
                         </li>
 
                     </ul>
 
                 </nav>   
              
 
                 
                 <div class="container-fluid">
 
                    
                     <h1 class="h3 mb-4 text-gray-800">Blank Page</h1>
 
                 </div>
                 
 
             </div>
            
 
             
             <footer class="sticky-footer bg-white">
                 <div class="container my-auto">
                     <div class="copyright text-center my-auto">
                         <span>Copyright &copy; Your Website 2020</span>
                     </div>
                 </div>
             </footer>
           
         </div>
         
 
     </div>
    
 
      
     <a class="scroll-to-top rounded" href="#page-top">
         <i class="fas fa-angle-up"></i>
     </a>
 
     
     <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
         <div class="modal-dialog" role="document">
             <div class="modal-content">
                 <div class="modal-header">
                     <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                     <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                         <span aria-hidden="true">×</span>
                     </button>
                 </div>
                 <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                 <div class="modal-footer">
                     <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                     <a class="btn btn-primary" href="login.html">Logout</a>
                 </div>
             </div>
         </div>
     </div>



            </section>
        );
    }
}

export default HomePage;