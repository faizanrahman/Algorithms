// Uses of Queues
// Adding and removing data using FIFO principle(think of a line/queue. The first person in line is the first person out.)
// Ex) Waiting in online gaming, uploading/downloading, Printing/Task processing. A printer only handles 1 thing at a time.


// Array implementation of Queues
// Enqueue - Add something to the queue
// Dequeue - Remove something from the queue

// One way is to use push and shift in tandem
var q = [];
q.push("FIRST");
q.push("SECOND");
q.push("THIRD");

q.shift();
q.shift();
q.shift();

// Another way is to use unshift and pop in tandem
// Unshift reindexes the entire array/queue.
q.unshift("FIRST");
q.unshift("SECOND");
q.unshift("THIRD");

q.pop();
q.pop();
q.pop();

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// SLL - Enqueue at the end of the list.
// SLL - Dequeue at the beginning of the list.
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        var newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue() {
        if(!this.first) return null;
        
        var temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }

}

// BIG O OF QUEUES
// Insertion O(1) - Constant time
// Removal   O(1)


