class Queue {
  constructor() {
    this.items = [];
  }

  // Add an element to the back of the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Remove and return the front element
  dequeue() {
    if (this.isEmpty()) return "Queue is empty";
    return this.items.shift();
  }

  // Get the front element without removing it
  front() {
    return this.isEmpty() ? "Queue is empty" : this.items[0];
  }

  // Check if queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the size of the queue
  size() {
    return this.items.length;
  }

  // Print queue elements
  print() {
    console.log(this.items.join(" <- "));
  }
}

// Example usage
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print(); // Output: 10 <- 20 <- 30
console.log(queue.dequeue()); // Output: 10
console.log(queue.front()); // Output: 20
