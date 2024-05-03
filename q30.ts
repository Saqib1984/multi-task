let usernames: string[] = ["Saqib", "Khawar", "Qasim", "admin", "Zia"];



    for (let username of usernames) {
        if (username.toLowerCase() === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }