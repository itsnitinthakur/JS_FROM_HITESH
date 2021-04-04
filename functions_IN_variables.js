
var getUserRole = function (name, role) {
    switch (role) {
        case "admin":
            return `${name} is admin with all access`;
            break;
        case "subadmin":
            return `${name} is sub-admin with access to create and delete`;
            break;
        case "testprep":
            return `${name} is a test prep with access to create and delete`;
            break;
        case "user":
            return `${name} is a user to consume content`;
            break;
    
        default:
            return `${name} is a trial user`;
            break;
    }
}
console.log(getUserRole("hitesh", "testprep"));

var getRole = getUserRole("sammy", "user");

console.log(getRole);