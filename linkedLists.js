class _Node {
	constructor(value, next) {
		this.value = value;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	insertFirst(item) {
		this.head = new _Node(item, this.head);
	}

	insertLast(item) {
		if (this.head === null) {
			this.insertFirst(item);
		} else {
			let tempNode = this.head;
			while (tempNode.next !== null) {
				tempNode = tempNode.next;
			}
			tempNode.next = new _Node(item, null);
		}
	}

	insertBefore(key, item) {
		if (this.head == null || this.head.value === key) {
			this.insertFirst(item);
		} else {
			let currNode = this.head;
			let prevNode = this.head;

			while (currNode.value !== key) {
				prevNode = currNode;
				currNode = currNode.next;
			}
			if (currNode == null) {
				return `${key} not found`;
			}
			prevNode.next = new _Node(item, currNode);
		}
	}

	insertAfter(key, item) {
		if (this.head == null) {
			this.insertFirst(item);
		} else {
			let currNode = this.head;

			while (currNode.value !== key && currNode !== null) {
				currNode = currNode.next;
			}
			if (currNode == null) {
				return `${key} not found`;
			}
			currNode.next = new _Node(item, currNode.next);
		}
	}

	insertAt(position, item) {
		if (this.head == null || position === 0) {
			this.insertFirst(item);
		} else {
			let currNode = this.head;
			let prevNode = this.head;
			let i = 0;
			while (i < position && currNode !== null) {
				prevNode = currNode;
				currNode = currNode.next;
				i++;
			}
			if (currNode == null) {
				this.insertLast(item);
			}
			prevNode.next = new _Node(item, currNode);
		}
	}

	find(item) {
		// Start at the head
		let currNode = this.head;
		// If the list is empty
		if (!this.head) {
			return null;
		}
		// Check for the item
		while (currNode.value !== item) {
			/* Return null if it's the end of the list 
               and the item is not on the list */
			if (currNode.next === null) {
				return null;
			} else {
				// Otherwise, keep looking
				currNode = currNode.next;
			}
		}
		// Found it
		return currNode;
	}

	remove(item) {
		// If the list is empty
		if (!this.head) {
			return null;
		}
		// If the node to be removed is head, make the next node head
		if (this.head.value === item) {
			this.head = this.head.next;
			return;
		}
		// Start at the head
		let currNode = this.head;
		// Keep track of previous
		let previousNode = this.head;

		while (currNode !== null && currNode.value !== item) {
			// Save the previous node
			previousNode = currNode;
			currNode = currNode.next;
		}
		if (currNode === null) {
			console.log('Item not found');
			return;
		}
		previousNode.next = currNode.next;
	}
	print() {
		if (!this.head) {
			console.log('empty');
		}
		let currNode = this.head;
		while (currNode !== null) {
			console.log(currNode.value);
			currNode = currNode.next;
		}
		if (currNode === null) {
			console.log('\n');
		}
	}

	main(data = []) {
		for (let item of data) {
			this.insertLast(item);
		}
	}

	removeDuplicates() {
		// If the list is empty
		if (!this.head) {
			return null;
		}
		// Start at the head
		let currNode = this.head;
		// Keep track of previous
		let previousNode = this.head;

		while (currNode.next !== null) {
			// Save the previous node
			previousNode = currNode;
			currNode = currNode.next;
			if (currNode.value === previousNode.value) {
				previousNode.next = currNode.next;
				if (currNode.next.value === previousNode.value) this.removeDuplicates();
			}
		}
		return;
	}
}
const SLL = new LinkedList();
SLL.main(['Apollo', 'Boomer', 'Helo', 'Husker', 'Starbuck']);
SLL.print();
SLL.insertLast('Tauhida');
SLL.remove('Husker');
SLL.insertBefore('Helo', 'Athena');
SLL.insertBefore('Helo', 'Boomer');
SLL.insertAt(2, 'Kat');
SLL.remove('Tauhida');
SLL.print();
