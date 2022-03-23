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

    if (this.length === 0) {
      this.head = node;

    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = new Node(value);
    }

    this.length++;
  }

  get(position) {
    if (position < 0 || position > this.length) {
      return 'Incorrect value of position';
    }

    let current = this.head;
    let index = 0;

    while (index < position) {
      current = current.next;
      index++;
    }

    return current.value;
  }

  delete(position) {
    if (position < 0 || position > this.length) {
      return 'Incorrect value of position';
    }

    let current = this.head;

    if (position === 0) {
      this.head = current.next;
    } else {
      let prev = null;
      let index = 0;

      while (index < position) {
        prev = current;
        current = current.next;
        index++;
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
list.delete(1);
console.log(list.getLength());
list.print();