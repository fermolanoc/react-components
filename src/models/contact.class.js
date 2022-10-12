export class Contact {
  name = "";
  lastName = "";
  email = "";
  isLoggedIn = false;

  // Constructor
  constructor(name, lastName, email, loggedIn) {
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.loggedIn = loggedIn;
  }
}
