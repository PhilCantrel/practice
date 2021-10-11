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


// primitive & union with type
type Point = number | string
const p1: Point = 1

// Classes
class Person {
  private id: number  // can only access from withing this class
  protected nick: string  // only accessible 
  name: string

  constructor(id: number, name: string, nick: string) {
    this.id = id
    this.name = name
    this.nick = nick
  }

}

const brad = new Person(1, "Bradley", "Brad")
const jase = new Person(2, "Jason", "Jase")



