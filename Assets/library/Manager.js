const Employee = require("./Employee");

class Manager extends employee {
  constructor(name, id, email, officenumber) {
    super(name, id, email);
    this.officenumber = officenumber;
  }
  getOfficenumber() {
    return this.officenumber;
  }
  getrole() {
    return "Manager";
  }
}

module.exports = Manager;
