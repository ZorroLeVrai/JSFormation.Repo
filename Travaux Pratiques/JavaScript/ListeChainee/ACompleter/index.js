class LinkedListItem {
  constructor(val) {
    this.value = val;
    this.next = null;
  }

  addItem(val) {
    const newItem = new LinkedListItem(val);
    newItem.next = this;
    return newItem;
  }

  toString() {
    let stringBuilder = String(this.value);
    let current = this.next;
    while (current) {
      stringBuilder += ` => ${current.value}`;
      current = current.next;
    }
    return stringBuilder;
  }
}

function invertLinkedList(linkedList) {
  //A compléter
}

const linkedList = new LinkedListItem(1).addItem(2).addItem(3).addItem(4);
console.log(linkedList.toString());
const invertedLinkList = invertLinkedList(linkedList);
console.log(invertedLinkList.toString());