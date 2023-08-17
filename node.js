const { exec } = require("child_process");

const projectDirectory =
  "C:\\Users\\siva.nagababu\\Pictures\\Screenshots\\AWEBDEV\\UdemyCoursesWebdev";

const command = "npm start";

exec(command, { cwd: projectDirectory }, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  console.log(`npm output: ${stdout} ${stderr}`);
});

// powershell -ExecutionPolicy Bypass -Command "node node.js"
