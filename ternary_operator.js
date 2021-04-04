// show user a signout button if he is authenticated,
// other wise show him option to Login/signup

var authenticated = true;

//if (authenticated) {
//    console.log('show signout button');
//} else {
//    console.log("shoe login option");
//}
authenticated ? console.log("signOut Button"): console.log("LOGIN");