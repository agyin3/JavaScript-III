/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding - this keyword refers to the global or window object
* 2. Implicit Binding - this keyword will refer to the object on the of dot notation
* 3. New Binding - this keyword refers to any new objects creted from a prototype
* 4. Explicit Binding - this keyword will refer to the object that is passed through apply(), bind() or call();
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this);

// Principle 2

// code example for Implicit Binding

const testObj = {
    name: "Object",
    print: function() {
        return `I am a ${this.name}`;
    }
}

testObj.print();

// Principle 3

// code example for New Binding

function TestObjects(name) {
    this.name = name,
    this.display = "Computer",
    this.show = function() {
        return `This is ${this.name} printing on your ${this.display}`
    }
}

const buddy = new TestObjects("Buddy");
const alien = new TestObjects("Alien");
buddy.show();
alien.show();
// Principle 4

// code example for Explicit Binding

buddy.show.call(alien);
alien.show.apply(buddy);