"use strict";
// Basic Types
var id = 5;
var company = 'Traversy Media';
var isPublished = true;
var x = "Hello";
var ids = [1, 2, 3, 4];
var arr = [1, true, 'Hello'];
// Tuple
var person = [1, "Hello", true];
// Tuple Array
var employee;
employee = [
    [1, "brad"],
    [2, "bob"],
    [3, "james"]
];
// Union
var pid = 22;
pid = '22';
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right"; // value is 4
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
var user = {
    id: 1,
    name: 'John'
};
// Type Assertion
var cid = 1;
// let customerId = <number>cid
var customerID = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
// Function with no return value
function log(message) {
    console.log(message);
}
var user1 = {
    id: 1,
    name: 'John',
};
var add = function (x, y) { return x + y; };
var sub = function (x, y) { return x - y; };
var p1 = 1;
// Classes
var Person = /** @class */ (function () {
    function Person(id, name, nick) {
        this.id = id;
        this.name = name;
        this.nick = nick;
    }
    return Person;
}());
var brad = new Person(1, "Bradley", "Brad");
var jase = new Person(2, "Jason", "Jase");
