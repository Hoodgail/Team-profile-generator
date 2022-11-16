// Engineer w/ Name, id, email, github
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }

    getHTMLCard() {
        return ``;
    }
}

module.exports = Engineer;
