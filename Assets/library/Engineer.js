const Employee = require("./Employee");

class engineer extends employee {
  constructor(name, id, email, username) {
    super(name, id, email);
    this.username = username;
  }
  getUsername() {
    return this.username;
  }
  getrole(){
    return "engineer"
  }
}

module.exports=engineer;
