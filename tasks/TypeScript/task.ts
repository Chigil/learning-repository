abstract class Employee {
  private readonly name: string;
  private readonly age: number;
  private salary: number;

  protected constructor(name: string, age: number, salary: number) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  public getName(): string {
    return this.name;
  }

  public getAge(): number {
    return this.age;
  }

  public getSalary(): number {
    return this.salary;
  }

  public setSalary(salary: number): void {
    this.salary = salary;
  }
}

class Developer extends Employee {
  private technologies: {
    name: string;
  }[];

  constructor(name: string, age: number, salary: number) {
    super(name, age, salary);
    this.technologies = [];
  }
}

class Designer extends Employee {
  private something: {
    name: string;
  }[];

  constructor(name: string, age: number, salary: number) {
    super(name, age, salary);
    this.something = [];
  }
}

class Company {
  private employees: Employee[];

  constructor(employees: Employee[]) {
    this.employees = employees;
  }

  public getSalariesSum(): number {
    return this.employees.map(employee => employee.getSalary()).reduce((acc, val) => acc + val);
  }
}

const employees: Employee[] = [
  new Designer('Vasya', 20, 600),
  new Developer('Vanya', 20, 800)
];
const company = new Company(employees);
console.log(company.getSalariesSum());