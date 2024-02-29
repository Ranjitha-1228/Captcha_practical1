 
let captcha;
function generate() {
     captcha = document.getElementById("image");
    let uniquechar = "";
    const random ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 5; i++) {
        uniquechar += random.charAt(Math.random() * random.length)
    }
 
    captcha.innerHTML = uniquechar; // Store generating input
}
 
function printmsg() {
    const user_input = document.getElementById("submit").value;
    if (user_input == captcha.innerHTML) {
       
        alert("captcha verified sucessfully!!!!")
    }
    else {
    
        alert("captcha verification failed please try again")
    }
}