const myName = 'seba';
console.log(myName);

//clases
class Person {
  // private age: number;
  // name: string;

  constructor(private age: number, public name: string) {
    this.age = age;
    this.name = name;
  }
  getSummary() {
    return `I'm ${this.name} and I'm ${this.age}`;
  }
}

const seba = new Person(28, 'seba');
console.log(seba);
//! lo siguiente da error debido a que las propiedades de la clase Person estan declaradas como privadas
// console.log(seba.age);
// console.log(seba.name);
