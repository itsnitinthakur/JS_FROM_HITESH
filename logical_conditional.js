// User is only allowed to make a purchase when he is :
// logged in
// email verfied
// cardInfo -- valid
// if any one is missing , stop purcahse

var isEmailVerified = true;
var cardInfo = true;

if (isLoggedIn && isEmailVerified && cardInfo ) {
    console.log("Allow user to make a purchase");
} else {
    console.log("You are NOT allowed to do that")
}
