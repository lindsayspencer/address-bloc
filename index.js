// process.argv access arguments bundled into an array at runtime; inquirer module takes care of this for us
const inquirer = require("inquirer");
const MenuController = require("./controllers/MenuController");
const menu = new MenuController();

menu.clear();
menu.main();
