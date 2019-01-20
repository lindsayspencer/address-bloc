// a JS class with methods to handle receiving requests from the user
const inquirer = require("inquirer");

module.exports = class MenuController {
  constructor() {
    this.mainMenuQuestions = [
      {
        type: "list",
        name: "mainMenuChoice",
        message: "Please choose from an option below: ",
        choices: ["Add new contact", "Exit"]
      }
    ];
    this.contacts = [];
  }
  clear() {
    console.log("\x1Bc");
  }
  main() {
    console.log("Welcome to AddressBloc!");
    inquirer
      .prompt(this.mainMenuQuestions)
      .then(response => {
        switch (response.mainMenuChoice) {
          case "Add new contact":
            this.addContact();
            break;
          case "Exit":
            this.exit();
          default:
            console.log("Invalid input");
            this.main();
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  exit() {
    console.log("Thanks for using AddressBloc!");
    process.exit();
  }
  addContact() {
    this.clear();
    console.log("addContact called");
    this.main();
  }
  getContactCount() {
    return this.contacts.length;
  }
  remindMe(){
    return "Learning is a life-long pursuit"
  }
};
