console.log("JS IS READY");

var addForm = document.getElementById("addForm");

var username = document.getElementById("username");
var errMSgUsername = document.getElementById('errMSgUsername');


var email = document.getElementById("email");
var errMSgEmail = document.getElementById("errMSgEmail");


var address = document.getElementById("address");
var errMSgAddress = document.getElementById("errMSgAddress");


var users = [];

var UsersTableBody = document.getElementById("users-table-body");


function initDataTable(){

    addForm.reset();

    var content = '';

    users.map((u)=>{
        content += ' <tr> <td>'+u.username+'</td><td>'+u.address+'</td><td>'+u.email+'</td> </tr> ';
    })

    UsersTableBody.innerHTML = content;
}

addForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const useranemValue = username.value;
    const emailValue = email.value;
    const addressValue = address.value;
    
    if (useranemValue !== '') {
        // ...
        errMSgUsername.innerHTML="";
        errMSgUsername.style.color = "red";

        if (emailValue !== '') {
            errMSgEmail.innerHTML="";

            if (addressValue !== '') {
                errMSgAddress.innerHTML="";
                
                
                const user = {
                    username:useranemValue,
                    email:emailValue,
                    address: addressValue
                }


                users.push(user);

                initDataTable();

                

                

            } else {
                errMSgAddress.innerHTML="address is required";
                errMSgAddress.style.color = "red";
            }

            
        } else {
            errMSgEmail.innerHTML="email is required";
            errMSgEmail.style.color = "red";
        }


    }else{
        errMSgUsername.innerHTML="username is required";
        errMSgUsername.style.color = "red";
    }



})



