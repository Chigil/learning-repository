class User {
  private usernameString;
  private passwordString;
  private _id;

  get username() {
    return this.usernameString
  }

  get password() {
    return this.passwordString
  }

  set username(value) {
    this.usernameString = value;
  }

  set password(value) {
    this.passwordString = value;

  }
}
