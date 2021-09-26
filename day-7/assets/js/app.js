var contactsList = document.getElementById('contactsList');
var searchInput = document.getElementById("searchInput");


var contacts = [
    { fullname: "chourabi taher", email: "tchourabi@gmail.com" },
    { fullname: "test user", email: "test@gmail.com" },
    { fullname: "saul godman", email: "saul@gmail.com" },
    { fullname: "Mr white", email: "white@gmail.com" },

]

function initUI(query) {
    let blocHTML = ''; 
    let res = contacts.filter((c)=> (c.fullname.toLowerCase().indexOf(query) != -1) || (c.email.toLowerCase().indexOf(query) != -1) ).map((c) => {
        blocHTML += '<li> <strong>' + c.fullname + '</strong> <br> <small>' + c.email + '</small> </li>';
    })

    contactsList.innerHTML = blocHTML;  
}



initUI('');



searchInput.addEventListener('keyup',(e)=>{
    const value = e.target.value; 
    
    initUI(value.toLowerCase());
})