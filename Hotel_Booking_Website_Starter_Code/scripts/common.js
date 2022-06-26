// let headerTemplate = `<img class="logo" src="./assests/images/logo.png" alt="logo">           
// <!-- Button trigger modal -->
// <button type="button" class="btn btn-light btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">Login</button>
// <!-- Modal -->
// <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//     <div class="modal-dialog">
//     <div class="modal-content">
//         <div class="modal-header">
//         <h5 class="modal-title" id="exampleModalLabel">Please Login</h5>
//         <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
//             <span aria-hidden="true">&times;</span>
//           </button>
//         </div>
//         <div class="modal-body">
//             <form action="index.html" autocomplete="on" style="z-index:1">
//                 <label for="Uname" class="mx-5">Username:</label> 
//                 <input type="text" name="USERNAME" id="input" placeholder="Enter Username" required autocomplete="on"><br/>
//                 <label for="password" class="mx-5">Password:</label> 
//                 <input type="password" name="password" id="input" placeholder="Enter Password" required><br/>
//             </form>
//         </div>
//         <div class="modal-footer text-center">
//         <button type="button" class="btn btn-primary">Login</button>
//         </div>
//     </div>
//     </div>
// </div>`;

// document.getElementById("hea").innerHTML = headerTemplate;



// let footerTemplate = `<div class="contact">    
//                 <button type="button" class="btn btn-info btn-sm contact" data-bs-toggle="modal" data-bs-target="#exampleModal2">Contact Us</button>
//                 <div class="modal " id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                     <div class="modal-dialog">
//                     <div class="modal-content">
//                         <div class="modal-header">
//                         <h5 class="modal-title" id="exampleModalLabel">Get in touch</h5>
//                         <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
//                             <span aria-hidden="true">&times;</span>
//                           </button>
//                         </div>
//                         <div class="modal-body">
//                             <p>Thank you for reaching out!!!</p>
//                             <p>Please enter your email and we will get back to you</p>
//                             <label for="email">Email:</label>
//                             <input type="email"  name="email" placeholder="Enter your email" required><br>
//                         </div>
//                         <div class="modal-footer text-center">
//                         <button type="button" class="btn btn-primary">Submit</button>
//                         </div>
//                     </div>
//                     </div>
//                 </div>
//             </div>
//             <div class="copy-right">
//                     <p>&copy; 2022 ROOM SEARCH PVT LTD</p>
//             </div>  
//             <div class="social">
//                 <a href="https://www.facebook.com/" target="_blank"><img class="social-image" src="./assests/images/facebook.png" alt="Facebook"></a>
//                 <a href="https://www.instagram.com/" target="_blank"><img class="social-image" src="./assests/images/instagram.png" alt="Facebook"></a>
//                 <a href="https://twitter.com/i/flow/login" target="_blank"><img class="social-image" src="./assests/images/twitter.png" alt="Facebook"></a>
//             </div>        
// </div>`

// document.getElementById("foo").innerHTML = footerTemplate;

//  var load = document.getElementById("loader");
//  function loadfun(){
//     load.style.display = 'none';
//  }





let loginn = document.getElementById("loginbox");
let logout = document.getElementById("loginbtn");
var count =0;

function login() {
    if (loginn.style.display == "block") {
        loginn.style.display = "none";
        let username1 = document.getElementById("username").value = "";
        let password1 = document.getElementById("passwordd").value = "";


    }
    else if (logout.innerHTML == "LOGOUT") {
        logout.innerHTML = "Login"
        localStorage.removeItem("usernameEnter");
        localStorage.removeItem("passwordEnter")
      
    }
    else {
        loginn.style.display = "block";
    }
}



let contact = document.getElementById("contactusbox");

function contactus() {
    if (contact.style.display == "block") {
        contact.style.display = "none";
    }
    else {
        contact.style.display = "block";
    }
}




localStorage.setItem("username", "admin");
localStorage.setItem("password", "admin");
var username = localStorage.getItem("username");
var password = localStorage.getItem("password");
console.log(username);
console.log(password);


function loginvalues() {
    let username1 = document.getElementById("username").value;
    let password1 = document.getElementById("passwordd").value;

    if (username1 != "" && password1 != "") {
        localStorage.setItem("usernameEnter", username1);
        localStorage.setItem("passwordEnter", password1);
        loginn.style.display = "none";

        document.getElementById("username").value = "";
        document.getElementById("passwordd").value = "";
        location.href = "index.html";
    }
    var usernamevalue = localStorage.getItem("usernameEnter");
    var passwordvalue = localStorage.getItem("passwordEnter");
    
    if (username !== usernamevalue && password !== passwordvalue){
    
        alert("incorreact details")
    }
    else if (username == usernamevalue && password == passwordvalue) {
        
        count++;
        console.log(count);
        logout.innerHTML = "LOGOUT"
        alert("you are login")
        
    }
    
}

let usernamevalue = localStorage.getItem("usernameEnter");
let passwordvalue = localStorage.getItem("passwordEnter");
console.log(usernamevalue);
console.log(passwordvalue);

if (username == usernamevalue && password == passwordvalue) {
    count++;
    console.log(count);
    logout.innerHTML = "LOGOUT"
    
    
}




