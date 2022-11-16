const fs = require("fs");
const open = require("open");
const inquirer = require("inquirer");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");

const Template = require("./src/template");

const inquireResults = {
    manager: { name: undefined, id: undefined, email: undefined, officenumber: undefined },
    employees: [],
};

// start app -> manager prompt -> engineer &/ intern prompt

async function nextPrompt() {
    const { next } = await inquirer.prompt([
        {
            name: "next",
            type: "list",
            choices: ["Add Engineer", "Add Intern", "fulfill"],
            message: "Please select one of the options",
        },
    ]);
    if (next === "Add Engineer") return internPrompt();
    if (next === "Add Intern") return engineerPrompt();
}

async function internPrompt() {
    const result = await inquirer.prompt([
        { type: "input", name: "name", message: "Employee Name: " },
        { type: "input", name: "id", message: "Employee Id: " },
        { type: "input", name: "email", message: "Employee Email: " },
        { type: "input", name: "githubusername", message: "Employee Github: " },
    ]);
    result.profession = 'intern'
    inquireResults.employees.push(result);
    Intern;
    return nextPrompt();
}

async function engineerPrompt() {
    const result = await inquirer.prompt([
        { type: "input", name: "name", message: "Employee Name: " },
        { type: "input", name: "id", message: "Employee Id: " },
        { type: "input", name: "profession", message: "Employee Profession: " },
        { type: "input", name: "email", message: "Employee Email: " },
        { type: "input", name: "githubusername", message: "Employee Github: " },
    ]);
    inquireResults.employees.push(result);
    Engineer;
    return nextPrompt();
}

async function managerPrompt() {
    const result = await inquirer.prompt([
        { type: "input", name: "name", message: "Manager Name: " },
        { type: "input", name: "id", message: "ID: " },
        { type: "input", name: "email", message: "Email: " },
        { type: "input", name: "officenumber", message: "Office Number: " },
    ]);
    result.profession = 'manager'
    inquireResults.manager = result;
    Manager;
    await nextPrompt();
}

async function build() {
    try {
        fs.mkdirSync("./dist");
    } catch {}

    fs.writeFile("./dist/index.html", Template([inquireResults.manager, ...inquireResults.employees]), (err) => {
        if (err) throw err;
        fs.copyFile("./template/style.css", "./dist/style.css", (err) => {
            if (err) throw err;
            open("./dist/index.html");
        });
    });
}

async function main() {
    await managerPrompt();
    build();
}

main();

// // {
// //     name: "next",
// //     type: "list",
// //     choices: ["Add Engineer", "Add Intern", "Complete Editing"],
// //     message: "Please select one of the options",
// // },

// runApp(addManager);

// function runApp(questionArr) {
//     inquirer
//         .prompt(questionArr)
//         .then((member) => {
//             teamArr.push(member);

//             if (member.next === "Add Engineer") {
//                 runApp(addEngineer);
//             } else if (member.next === "Add Intern") {
//                 runApp(addIntern);
//             } else {
//                 createProfiles(teamArr);
//             }
//         })
//         .catch((err) => console.log(err));
// }

// function createProfiles(teamArr) {
//     const profiles = teamArr.map((member) => {
//         const { name, id, email } = member;

//         if (member.hasOwnProperty("officeNumber")) {
//             const { officeNumber } = member;
//             return new Manager(name, id, email, officeNumber);
//         }

//         if (member.hasOwnProperty("github")) {
//             const { github } = member;
//             return new Engineer(name, id, email, github);
//         }

//         if (member.hasOwnProperty("school")) {
//             const { school } = member;
//             return new Intern(name, id, email, school);
//         }
//     });

//     generateHtml(profiles);
// }

// function generateHtml(profiles) {
//     let profileCards = "";
//     profiles.forEach((profile) => {
//         if (profile instanceof Manager) {
//             const card = addManagerCard(profile);
//             profileCards += card;
//         } else if (profile instanceof Engineer) {
//             const card = addEngineerCard(profile);
//             profileCards += card;
//         } else if (profile instanceof Intern) {
//             const card = addInternCard(profile);
//             profileCards += card;
//         }
//     });

//     const newHtml = pageLayout(profileCards);

//     writeHtml(newHtml);
// }

// function writeHtml(newHtml) {
//     fs.writeFile("./dist/team-profile.html", newHtml, (err) => {
//         if (err) throw err;
//         console.log("HTML document successfully created in the /dist folder.");
//     });
// }
