class User {
  username: string;
  age: number;
}


interface Repository<T> {
  create: (obj: T) => T;
  get: () => T;
  update: (obj: T) => T;
  delete: (obj: T) => T;
}

class UserRepo implements Repository<User> {
  create(): User {
    return undefined;
  }

  delete(): User {
    return undefined;
  }

  get(): User {
    return undefined;
  }

  update(): User {
    return undefined;
  }

}