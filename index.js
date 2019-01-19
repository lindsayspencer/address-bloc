// process.argv access arguments bundled into an array at runtime; inquirer module takes care of this for us
const inquirer = require("inquirer");

// prompt method accepts an array of question objects and returns a promise
const questions = [
  {
    type: "list",
    name: "status",
    message: "Are you hungry?",
    choices: ["Yes", "No"]
  }
];
// prompt method + .then promise, which handles the answers object
inquirer
  .prompt(questions)
  .then(answers => {
    if (answers.status === "Yes") {
      console.log("Get up and eat!");
    } else {
      console.log("Get back to work!");
    }
  })
  // error handling 
  .catch(err => {
    console.log(err);
  });
