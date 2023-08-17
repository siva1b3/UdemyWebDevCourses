const welcomeMessage =
    "Welcome to the todo app \
    \nType Add - Add tasks to the list \
    \nType List - view the list \
    \nType Delete - delete tasks from list \
    \nType Quit - Qiut the app"

let input = prompt(welcomeMessage);
input = input.toLocaleUpperCase()
commandsArray = ["ADD", "DELETE", "LIST", "QUIT"]
if (commandsArray.includes(input)) {
    console.log(welcomeMessage)
}
