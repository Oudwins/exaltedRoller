class User {
  constructor(masterPassword) {
    this.masterPassword = masterPassword;
    this.users = [];
    this.lastId = 0;
  }

  findById(id) {
    this.users.find((el) => el.id === id);
  }

  create(user) {
    this.users.push({
      name: user.name,
      color: user.color,
      id: this.lastId,
    });
    this.lastId += 1;
  }
}

module.exports = new User('lassombras');
