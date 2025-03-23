class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null; // Points to first element
    this.rear = null; // Points to last element
    this.size = 0;
  }

  // Enqueue (insert at tail)
  enqueue(value) {
    let newNode = new Node(value);
    if (!this.rear) {
      this.front = this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.size++;
  }

  // Dequeue (remove from head)
  dequeue() {
    if (!this.front) return "Queue is empty";
    let value = this.front.value;
    this.front = this.front.next;
    if (!this.front) this.rear = null; // If queue is empty after removal
    this.size--;
    return value;
  }

  // Get front element without removing it
  frontValue() {
    return this.front ? this.front.value : "Queue is empty";
  }

  // Check if queue is empty
  isEmpty() {
    return this.size === 0;
  }

  // Print queue elements
  print() {
    let current = this.front;
    let result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join(" <- "));
  }
}

// Example usage
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print(); // Output: 10 <- 20 <- 30
console.log(queue.dequeue()); // Output: 10
console.log(queue.frontValue()); // Output: 20
