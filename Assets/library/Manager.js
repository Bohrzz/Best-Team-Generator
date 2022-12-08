const employee = require("./Employee");

class manager extends employee {
  constructor(name, id, email, officenumber) {
    super(name, id, email);
    this.officenumber = officenumber;
  }
  getOfficenumber() {
    return this.officenumber;
  }
  getrole(){
    return "manager"
  }
}

module.exports=manager;
