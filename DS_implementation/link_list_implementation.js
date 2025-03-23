class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    let newnode = new Node(value);
    if (!this.head) {
      this.head = newnode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newnode;
  }
  printList() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.value + "->";
      current = current.next;
    }
    console.log(result + "null");
  }
}
let list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.printList();

names = [];
names22 = new Array();
names22.push("hey");

console.log(names.length);
console.log(names22.length);

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [nums[i], nums[j]]; // ✅ Correct return
      }
    }
  }
  return null; // ⛔ Ensure function returns something if no pair is found
}

console.log(twoSum([2, 7, 11, 15], 9)); // Output: [2, 7]
console.log(twoSum([3, 2, 4], 6)); // Output: null (instead of undefined)
