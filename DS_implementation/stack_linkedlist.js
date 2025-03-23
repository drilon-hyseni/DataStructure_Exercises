class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null; // Points to the top of the stack
    this.size = 0;
  }

  // Push an element onto the stack (insert at head)
  push(value) {
    let newNode = new Node(value);
    newNode.next = this.top; // New node points to the old top
    this.top = newNode; // Update top to new node
    this.size++;
  }

  // Remove and return the top element (remove from head)
  pop() {
    if (!this.top) return "Stack is empty";
    let value = this.top.value;
    this.top = this.top.next; // Move top to the next node
    this.size--;
    return value;
  }

  // Get the top element without removing it
  peek() {
    return this.top ? this.top.value : "Stack is empty";
  }

  // Check if stack is empty
  isEmpty() {
    return this.size === 0;
  }

  // Print stack elements
  print() {
    let current = this.top;
    let result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join(" -> "));
  }
}

// Example usage
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.print(); // Output: 30 -> 20 -> 10
console.log(stack.pop()); // Output: 30
console.log(stack.peek()); // Output: 20
