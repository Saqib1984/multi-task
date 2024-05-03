let usernames = ["Saqib", "Khawar", "Qasim", "admin", "Zia"];
function grUsers(usernames) {
    if (usernames.length === 0) {
        console.log("We need to find some users!");
        return;
    }
    for (let username of usernames) {
        if (username.toLowerCase() === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}
grUsers(usernames);
// Remove all usernames
usernames = [];
// Call the function again with an empty array
grUsers(usernames);
export {};
