// Each node contains 2 things:
// 1. piece of data  - val
// 2. reference to next node - next

class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// var first = new Node("Hi");
// first.next = new Node("There");
// first.next.next = new Node("How");
// first.next.next.next = new Node("Are You");

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    push(val) {
        var newNode = new Node(val);
        if(!this.head) {
            // The head and the tail is the same thing.
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        
    }

    // traverse() {
    //     var current = this.head;
    //     while(current) {
    //         console.log(current.val);
    //         current.next;
    //     }
    // }

    pop() {
        if(!this.head) return undefined;
        // 2 variables, 1 to keep track of current, and the other to keep track of 2nd to last.
        var current = this.head;
        var newTail = this.head;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        // console.log(current.val);
        // console.log(newTail.val);
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tatil = null;
        }
        return current;
            
    }

    // removes a node from the beginning of a linked list, and moves the head over to the 2nd item in the list.
    shift() {
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0) {
            this.tail = null;
        }
        return currentHead;

    }

    // adds a node to the beginning of a list.
    unshift(val) {
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
        newNode.next = this.head;
        this.head = newNode;
        }
        this.length++;
        return this;
    }

    // Retreiving a node from a list by index position.
    get(index) {
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    // Changing the value of a node based on its position in a linked list.
    set(index, value) {
        var foundNode = this.get(index);
        if(foundNode) {
            foundNode.val = value;
            return true;
        }
        return false;
    }
    
    // Insert a new node at the specified position.
    // If index < 0, > length, return false
    // !! will corece it to true boolean 
    insert(index, val) {
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);

        var newNode = new Node(val);
        var previous = this.get(index - 1);
        var temp = previous.next;
        previous.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    // Removing a node from the specified position in the linked list.
    remove(index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();

        var previousNode = this.get(index - 1);
        var removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }

    // reversing a linked list in place
    reverse() {
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var previous = null;
        var next;
        for(var i = 0; i < this.length; i++) {
            next = node.next;
            node.next = previous;
            previous = node;
            node = next;
        }
        return this;
    }

    
}

var list = new SinglyLinkedList();

