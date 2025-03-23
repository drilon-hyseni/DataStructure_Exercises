class Stack {
  constructor() {
    this.items = [];
  }

  // Push an element to the top
  push(element) {
    this.items.push(element);
  }

  // Remove and return the top element
  pop() {
    if (this.isEmpty()) return "Stack is empty";
    return this.items.pop();
  }

  // Get the top element without removing it
  peek() {
    return this.isEmpty()
      ? "Stack is empty"
      : this.items[this.items.length - 1];
  }

  // Check if stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the size of the stack
  size() {
    return this.items.length;
  }

  // Print stack elements
  print() {
    console.log(this.items.join(" -> "));
  }
}

// Example usage
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.print(); // Output: 10 -> 20 -> 30
console.log(stack.pop()); // Output: 30
stack.print();
console.log(stack.peek()); // Output: 20
