// Allow user to acess course if he is :
//logged in from email
// logged in from google
// logged in from Facebook

var email = true;
var facebook = false;
var google = false;

if (email || facebook || google) {
    console.log("Login Sucess");
}
