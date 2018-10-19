class Person {
  constructor (name, age) {
    this.name = name,
    this.age = age
  }

  getdep (hola) {
    // return `${this.name} is ${this.age} ok`
    console.log(this.name, this.age, hola);
  }
}

var user = new Person("alex", 108);

// var lala = user.getdep();
// console.log(lala);

user.getdep('gjdj');
