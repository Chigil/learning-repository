class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  add(value) {
    let node = new Node(value);
    this.length++;
    if (!this.head) {
      this.head = node;
      return;

    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = new Node(value);
    }
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return 'Index get out bounces';
    }

    let current = this.head;
    let counter = 0;

    while (counter < index) {
      current = current.next;
      counter++;
    }

    return current.value;
  }

  delete(index) {
    if (index < 0 || index >= this.length) {
      return 'Incorrect value of index';
    }

    let current = this.head;

    if (index === 0) {
      this.head = current.next;
    } else {
      let prev = null;
      let counter = 0;

      while (counter < index) {
        prev = current;
        current = current.next;
        counter++;
      }

      prev.next = current.next;
    }

    this.length--;
    return current.value;
  }
  getLength() {
    return this.length;
  }
  print() {
    let current = this.head;

    while(current) {
      console.log("Node: " + current.value);
      current = current.next;
    }
  }
}

let list = new LinkedList();
list.add(15);
list.add(false);
list.add('1wdwa5');
list.add([15,23,23]);
console.log(list.get(1));
console.log(list.delete(2));
console.log(list.getLength());
list.print();