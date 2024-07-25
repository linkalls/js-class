class Car {
  constructor(r, g, b, name = "color") {
    //* initializeみたいな感じ
    console.log("constructorのなか")
    console.log(r, g, b, name)
    this.r = r //* オブジェクトが作られる
    this.g = g
    this.b = b
    this.name = name
  }

rgb(){
  const {r,g,b} = this
  return `rgb(${r},${g},${b})`
}

  greet(){
    return `${this.name}こんにちは` //* prototypeに定義される
  }

  test(){
    return this.rgb() //* 呼べちゃう
  }

}

const c = new Car(1, 2, 3, "aqa")
console.log(c) //* Car { r: 1, g: 2, b: 3, name: 'aqa' }
console.log(c.greet())
console.log(c.rgb())
console.log(c.test())