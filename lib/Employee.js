class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.getName.bind(this)
    this.getId.bind(this)
    this.getEmail.bind(this)
    this.getRole.bind(this)
  }

  getName() {
    console.trace(this)
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
