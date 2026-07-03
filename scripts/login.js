import { auth } from "./firebase.js";

import {
 signInWithEmailAndPassword,
 onAuthStateChanged,
 signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

window.login = async function(){

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;

    try{

        await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        alert("Login Successful");

        window.location.href = "index.html";

    }catch(error){

        alert(error.message);

    }

}

onAuthStateChanged(auth, (user) => {

    if(user){
        console.log("Logged In:", user.email);
    }

});

window.logout = async function(){

    await signOut(auth);

    alert("Logged Out");

    window.location.href = "login.html";

}
window.logout = async function() {
    await signOut(auth);
    alert("Logged Out");
    window.location.href = "login.html";
};