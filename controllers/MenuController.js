// a JS class with methods to handle receiving requests from the user
const inquirer = require("inquirer");
const ContactController = require("./ContactController");

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
    this.book = new ContactController();
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
    inquirer.prompt(this.book.addContactQuestions).then(answers => {
      this.book
        .addContact(answers.name, answers.phone, answers.email)
        .then(contact => {
          console.log("Contact added successfully!");
          this.main();
        })
        .catch(err => {
          console.log(err);
          this.main();
        });
    });
  }
};
