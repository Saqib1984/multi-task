// Define a class for representing a room
class Room {
    name;
    description;
    items;
    constructor(name, description, items) {
        this.name = name;
        this.description = description;
        this.items = items;
    }
}
// Define a class for representing the player
class Player {
    currentRoom;
    inventory;
    constructor(currentRoom, inventory) {
        this.currentRoom = currentRoom;
        this.inventory = inventory;
    }
}
// Define the game rooms
const rooms = [
    new Room("Living Room", "You are in the living room. You see a sofa and a TV.", ["Key"]),
    new Room("Kitchen", "You are in the kitchen. You see a table and some chairs.", ["Knife"]),
    new Room("Bedroom", "You are in the bedroom. You see a bed and a wardrobe.", ["Lamp"]),
    new Room("Bathroom", "You are in the bathroom. You see a bathtub and a sink.", ["Mirror"]),
];
// Define the player
const player = new Player(rooms[0], []);
// Define the game logic
function playGame() {
    console.log("Welcome to the Text Adventure Game!");
    console.log("Find the key in one of the rooms to unlock the exit door.");
    console.log("Type 'help' for a list of commands.");
    // Game loop
    while (true) {
        console.log("\nYou are in the " + player.currentRoom.name);
        console.log(player.currentRoom.description);
        // Check if the current room contains the key
        if (player.currentRoom.items.includes("Key")) {
            console.log("You found the key! Now you can unlock the exit door and escape!");
            break;
        }
        // Prompt for user input
        const input = prompt("help");
        // Process user input
        switch (input.toLowerCase()) {
            case "help":
                console.log("Commands: 'look', 'go <room>', 'take <item>', 'inventory', 'exit'");
                break;
            case "look":
                console.log(player.currentRoom.description);
                break;
            case "inventory":
                console.log("Inventory: " + player.inventory.join(", "));
                break;
            case "exit":
                console.log("Exiting the game...");
                return;
            default:
                if (input.startsWith("go ")) {
                    const destination = input.slice(3);
                    const nextRoom = rooms.find(room => room.name.toLowerCase() === destination.toLowerCase());
                    if (nextRoom) {
                        player.currentRoom = nextRoom;
                        console.log("You moved to the " + nextRoom.name);
                    }
                    else {
                        console.log("There is no such room.");
                    }
                }
                else if (input.startsWith("take ")) {
                    const item = input.slice(5);
                    if (player.currentRoom.items.includes(item)) {
                        player.inventory.push(item);
                        player.currentRoom.items = player.currentRoom.items.filter(i => i !== item);
                        console.log("You took the " + item);
                    }
                    else {
                        console.log("There is no such item in this room.");
                    }
                }
                else {
                    console.log("Invalid command. Type 'help' for a list of commands.");
                }
        }
    }
}
// Start the game
playGame();
export {};
