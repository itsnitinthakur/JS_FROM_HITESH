var user = {
    firstName : "Hitesh",
    lastName : "Chaoudhary",
    role: "Admin",
    loginCount: 32,
    facebookSignedIn: true,
};

console.log(user.firstName);
console.log(user["lastName"]);

console.log(user.loginCount);
user.loginCount = 44;
console.log(user.loginCount);
console.log(user);
console.table(user);