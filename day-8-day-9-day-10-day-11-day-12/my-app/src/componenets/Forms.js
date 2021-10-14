import React from "react"; 


const compStyles = {
    textDanger : {
        color:'red'
    }
}



class MyForms extends React.Component{
    constructor(props){
        super(props); 
        this.state = {
            username : '',
            password: '',
            role:'',


            roles : [
                { name:"USER", value:1 },
                { name:"Admin", value:2 },
                
            ]
        }
    }

 

    connect(){
        const data = {
            username: this.state.username,
            password: this.state.password,
            role: this.state.role,
            
        }

        console.log("sending data to serevr...");
        console.log(data);
    }





    render(){
        return(
           <div>
               <form onSubmit={ (e)=>{
                   e.preventDefault();
               } } >
                   <div>
                       <label   className={ this.state.username=== '' ? 'danger-text':'' }
                       >Username 
                        {
                            this.state.username === '' ? <span>*</span> : <span></span>
                        }   
                        </label><br/>
                       <input 
                       className={ this.state.username=== '' ? 'danger-input':'' }
                       
                       type="text" onChange={ (e)=>{ this.setState({username:e.target.value}) } }  value={ this.state.username } /><br/>
                   </div>


                   <div>
                       <label style={ this.state.password === '' ? compStyles.textDanger : {} } >Password
                       {
                            this.state.password === '' ? <span>*</span> : <span></span>
                        }   

                        </label><br/>
                       <input type="password" onChange={ (e)=>{ this.setState({password:e.target.value}) } } value={this.state.password} /><br/>
                   </div>


                   
                   <div>
                       <label   >Role  </label><br/>
                       
                       <select onChange={ (e)=>{ this.setState({role:e.target.value}) } }>
                           <option>please choose value</option>
                           {
                               this.state.roles.map((r)=>{
                                   return <option value={r.value}>{r.name}</option>;
                               })
                           }
                       </select>

                   </div>
                   
                   <button onClick={ ()=>{
                       // connect !! => sending DATA to server !!!
                       this.connect();
                   } }  type="submit" disabled={ this.state.username==='' || this.state.password==='' } >Connect</button>


               </form>
           </div>
        );
    }
}


export default MyForms;