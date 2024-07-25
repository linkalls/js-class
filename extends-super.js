// class Cat {
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }
//   eat() {
//     return `${this.name}がご飯食べてる` //* thisが重要
//   }
//   meow(){
// console.log("cat!!!!!!!!!!!")
//   }
// }

// // const c = new Cat("hello",1212121212)
// // console.log(c.eat())

// class Dog {
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }
//   eat() {
//     return `${this.name}がご飯食べてる` //* thisが重要
//   }
// }

class Pet {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  eat() {
    return `${this.name}がご飯食べてる` //* thisが重要
  }
}

class Cat extends Pet {
  //* 継承してる
  meow() {
    console.log(this.name)
  }
}

const c = new Cat("hello", 1212121212)
console.log(c.eat())
c.meow()

class Rabbit extends Pet {
  constructor(name, age, jumpHight = 5) {
    super(name, age) //* おやのconstructorをよんでる
    this.jumpHight = jumpHight
  }
}

const ra = new Rabbit("うさこ",4,111)
console.log(ra)  //* Rabbit { name: 'うさこ', age: 4, jumpHight: 111 }
