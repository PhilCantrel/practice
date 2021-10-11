// Basic Types
let id: number = 5
let company: string = 'Traversy Media'
let isPublished: boolean = true
let x: any = "Hello"

let ids: number[] = [1,2,3,4]
let arr: any[] = [1, true, 'Hello']

// Tuple
let person: [number, string, boolean] = [1, "Hello", true]
// Tuple Array
let employee: [number, string][]

employee = [
  [1, "brad"],
  [2, "bob"],
  [3, "james"]
]

// Union
let pid: string | number = 22
pid = '22'

// Enum
enum Direction1 {
  Up = 1, // value is 1 (default is 0)
  Down,   // value is 2
  Left,   // value is 3
  Right   // value is 4
}

enum Direction2 {
  Up = 'Up', 
  Down = 'Down',
  Left = 'Left',   // value is 3
  Right = 'Right', // value is 4
}

// Objects
type User = { 
  id: number
  name: string 
}

const user: User = { 
  id: 1,
  name: 'John'
}

// Type Assertion
let cid: any = 1
// let customerId = <number>cid
let customerID= cid as number

// Functions
function addNum(x: number, y: number): number {
  return x + y
}

// Function with no return value
function log(message: string | number) {
  console.log(message)
}

// Interface - cant use with primitives or unions, usually used in the case of Objects
interface UserInterface { 
  readonly id: number  // read only
  name: string
  age?: number        // optional
}

const user1: UserInterface = { 
  id: 1,
  name: 'John',
}

interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

interface PersonInterface { 
  id: number  // read only
  name: string
  register(): string
}


// primitive & union with type
type Point = number | string
const p1: Point = 1

// Classes
class Person implements PersonInterface {
  id: number 
  name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  register() {
    return `${this.name} is now registered`
  }

}

const brad = new Person(1, "Bradley", "Brad")
const jase = new Person(2, "Jason", "Jase")

console.log(brad.register())

//Subclass
class Employee extends Person {
  position: string

  constructor(id: number, name: string, position:string) {
    super(id, name)
    this.position = position
  }
}

const emp = new Employee(3, 'Shawn', 'Developer')

//Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['brad', 'john', 'jace'])

numArray.push('hello')











