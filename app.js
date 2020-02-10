const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const questions = require("./lib/questions");
const generateHTML = require("./lib/generateHTML");

var employeeHTML = (``);

init()

function init() {
    inquirer.prompt(questions.initiate)
        .then(function(data) {
            if (data.choice === "Manager") {
                getManagerQ();
            } else if (data.choice === "Engineer") {
                getEngineerQ();
            } else if (data.choice === "Intern") {
                getInternQ();
            } else if (data.choice === "Exit") {
                fileGenerator();
            }
        })
};

function getManagerQ() {
    console.log("Editing Manager!")
    inquirer.prompt(questions.managerQ)
        .then((res) => {
            console.log(res);
            const managerData = new Manager(res.name,
                res.id,
                res.email,
                res.officeNumber
            );
            console.log(managerData);
            var managerEl = generateHTML.generateManagerHTML(managerData);
            employeeHTML = employeeHTML + managerEl;
            console.log(employeeHTML);
            init();
        }).catch(function(error) {
            console.log(error);
        })
};


function getEngineerQ() {
    console.log("Editing Engineer!")
    inquirer.prompt(questions.engineerQ)
        .then((res) => {
            console.log(res);
            const engineerData = new Engineer(res.name,
                res.id,
                res.email,
                res.github
            );
            console.log(engineerData);
            var engineerEl = generateHTML.generateEngineerHTML(engineerData);
            employeeHTML = employeeHTML + engineerEl;
            console.log(employeeHTML);
            init();
        }).catch(function(error) {
            console.log(error);
        })

};

function getInternQ() {
    console.log("Editing Intern!")
    inquirer.prompt(questions.internQ)
        .then((res) => {
            console.log(res);
            const internData = new Intern(res.name,
                res.id,
                res.email,
                res.school
            );
            console.log(internData);
            var internEl = generateHTML.generateInternHTML(internData);
            employeeHTML = employeeHTML + internEl;
            console.log(employeeHTML);
            init();
        }).catch(function(error) {
            console.log(error);
        })

};

function fileGenerator() {
    const mainEl = generateHTML.generateMainHTML(employeeHTML);
    console.log("Generating...");
    fs.writeFile("./output/team.html", mainEl, function(err) {
        if (err) {
            return console.log(err)
        }
        console.log("HTML file generated");
    });
};