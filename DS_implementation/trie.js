class TrieNode {
  constructor() {
    this.children = new Map();
    this.isWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let curr = this.root; // Use 'let' or 'const' for variable declaration
    for (const char of word) {
      if (!curr.children.has(char)) {
        curr.children.set(char, new TrieNode());
      }
      curr = curr.children.get(char);
    }
    curr.isWord = true; // Mark the end of the word
  }

  search(word) {
    let curr = this.root;
    for (const char of word) {
      if (!curr.children.has(char)) {
        return false;
      }
      curr = curr.children.get(char);
    }
    return curr.isWord; // Return true only if it's the end of a word
  }

  startsWith(prefix) {
    let curr = this.root;
    for (const char of prefix) {
      if (!curr.children.has(char)) {
        return false;
      }
      curr = curr.children.get(char);
    }
    return true; // If we reach the end of the prefix, return true
  }
}

const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple")); // true
console.log(trie.search("app")); // false
console.log(trie.startsWith("app")); // true
trie.insert("app");
console.log(trie.search("app")); // true
