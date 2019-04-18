// Uses of stacks
// Stacks follow a LIFO principle - Last In First Out(It is an abstract concept.)
// The last element added to the stack will be the first element to be removed from the stack.
// Ex) stack of plates, books etc.
// The last thing to be added in is the first thing to be removed, and the first thing to be added in is the 
// last thing to be removed.
// The Call Stack is an example of how functions are executed. Undo/Redo(google docs) function in programs, 
// routing(history object react)
// A stack can be implemented as a linkedList, or an Array.

var stack = [];
stack.push("google");
stack.push("instagram");
stack.push("youtube");

stack.pop();

stack.push("amazon");
stack.pop();

stack.unshift("create new file");
stack.unshift("cloned out wrinkle");
stack.unshift("resized file");

stack.shift();
stack.shift();
stack.shift();
// Shift removes data from the front of the Array.
// Unshift adds data to the front of the array.
// Use push and pop in tandem, or use unshift and shift.

// Push and pop does not require shifting elements, where as shift and unshift requires shifting of elements,
// hence the term shift/unshift.

// Node class
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Stack class
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        var newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;    
        }
        return ++this.size;
    }

    pop() {
        if(!this.first) {
            return null; // There is nothing in the stack to pop.
        }
        var temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
        
    }
}

// SLL implementation of stack:
// Push and pop methods have reverse implementation so that we can achieve constant time instead of linear time. 

// BIG(O) of Stacks
// Insertion - O(1) Constant time
// Removal - O(1)



