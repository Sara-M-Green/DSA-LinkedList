class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head)
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item)
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next
            }
            tempNode.next = new _Node(item, null)
        }

    }

    insertBefore(newItem, nextItem) {

        if (!this.head) {
          return null;
        }
    
        if (this.head.value === nextItem) {
          this.insertFirst(newItem);
        }
    
        let currNode = this.head;
        let previousNode = this.head;
    
        while ((currNode !== null) && (currNode.value !== nextItem)) {
          previousNode = currNode;
          currNode = currNode.next;
        }
    
        if (currNode === null) {
          console.log('Item not found');
          return;
        }
        let newNode = new _Node(newItem, previousNode.next);
        previousNode.next = newNode;
    }

    insertAfter(newItem, prevItem) {
        if (!this.head) {
          return null;
        }
        let currNode = this.head;
    
        while ((currNode !== null) && (currNode.value !== prevItem)) {
          currNode = currNode.next;
        }
        if (currNode === null) {
          console.log('Item not found');
          return;
        }
        if (prevItem.next === null) {
          this.insertLast(newItem);
          return;
        }
        let newNode = new _Node(newItem, currNode.next);
        currNode.next = newNode;
    }

    insertAt(item, index) {
        if (this.head === null) {
            this.insertFirst(item)
            return
        }

        let currNode = this.head
        let currIndex = 1

        while (currIndex < index - 1) {
            currNode = currNode.next
            currIndex++
        }

        const tempNode = new _Node(item, currNode.next)

        currNode.next = tempNode

    }



    find(item) {
        // start at the head
        let currNode = this.head

        // If the list is empty
        if (!this.head) {
            return null
        }

        // Check for the item
        while (currNode.value !== item) {
            // Return null if it's the end of the list and item is not
            // on list
            if (currNode.next === null) {
                return null
            }

            else {
                // otherwise, keep looking
                currNode = currNode.next
            }

            // Found it
            return currNode 
        }
    }

    remove(item) {
        // If the list is empty
        if (!this.head) {
            return null
        }

        // If the node to be removed is the head, make the 
        // next node head

        if (this.head.value === item) {
            this.head = this.head.next
            return
        }
        // Start at the head
        let currNode = this.head
        // keep track of previous
        let previousNode = this.head

        while((currNode !== null) && (currNode.value !== item)) {
            // save the previous node
            previousNode = currNode
            currNode = currNode.next
        }

        if (currNode === null) {
            console.log('Item not found')
        }

        previousNode.next = currNode.next

    }
}

function main() {
    const SLL = new LinkedList()

    SLL.insertFirst('Apollo')
    SLL.insertLast('Boomer')
    SLL.insertLast('Helo')
    SLL.insertLast('Husker')
    SLL.insertLast('Starbuck')

    SLL.insertLast('Tauhida')

    SLL.remove('Husker')

    SLL.insertBefore('Athena', 'Boomer')
    SLL.insertAfter('Hotdog', 'Helo')

    SLL.insertAt('Kat', 3)

    SLL.remove('Tauhida')
    
    display(SLL)

    size(SLL)

    isEmpty(SLL)

    // findsPrevious(SLL, 'Hotdog')

    findLast(SLL)

    reverseList(SLL)

    thirdFromEnd(SLL)
    middleOfList(SLL)
    cycleFinder(SLL)

}

function display(llist) {
    let currNode = llist.head;
    while (currNode !== null) {
      console.log(currNode.value);
      currNode = currNode.next;
    }
}

function size(list){
    let size = 0
    let currNode = list.head
    while (currNode !== null) {
        size ++
        currNode = currNode.next
    }
    console.log(size)
    return size
}

function isEmpty(list) {
    let currNode = list.head
    if (currNode === null) {
        console.log('This list is empty')
    } else {
        console.log('This list is not empty')
    }

}

function findsPrevious(list, node) {
    if (list.head === null) {
        console.log('linked list is empty')
        return
    }


    let currNode = list.head
    let prevNode = list.head

    while(currNode !== null && currNode.val !== node) {
        prevNode = currNode
        currNode = currNode.next
    }

    return console.log(prevNode.value)

}

function findLast(list) {
    if (list.head === null) {
        console.log('No items in list')
    }

    let currNode = list.head

    while (currNode.next !== null) {
        currNode = currNode.next
    }

    return console.log(currNode.value)
}

function reverseList(list) {
    if (list.head === null) {
        console.log('No items in list')
        return
    }

    let currNode = list.head
    let prevNode = null;
    let tempNode = currNode

    while (currNode !== null) {
        tempNode = currNode.next
        currNode.next = prevNode
        prevNode = currNode
        currNode = tempNode
    }

    list.head = prevNode
    return console.log(display(list))
}

function thirdFromEnd(list) {
    if (list.head === null) {
        console.log('No items in list')
        return
    }

    let currNode = list.head
    let prevNode = null
    let prevPrevNode = null

    while (currNode.next !== null) {
        prevPrevNode = prevNode
        prevNode = currNode
        currNode = currNode.next
    }

    if (prevPrevNode === null) {
        console.log('list needs to be longer')
        return
    }

    return console.log(`Third from end is ${prevPrevNode.value}`)
}

function middleOfList(list) {
    if (list.head === null) {
        console.log('No items in list')
        return
    }

    let currNode = list.head
    let stepper = 1
    while (currNode.next !== null) {
        currNode = currNode.next
        stepper ++
    }
    let middle = Math.ceil(stepper / 2)

    stepper = 1
    currNode = list.head

    while (stepper < middle) {
        stepper ++
        currNode = currNode.next
    }

    return console.log(`Middle of list is ${currNode.value}`)

}

function cycleFinder(list) {
    let slowNode = list.head
    let fastNode = list.head

    while (slowNode.next && slowNode) {
        slowNode = slowNode.next
        fastNode = fastNode.next.next
        if (slowNode === fastNode) {
            return console.log('There is a cycle!')
        }
        return console.log('No cycles found')
    }
}

function sortList(list) {
    let currNode = list.head;
    let head = list.head;
    let storeNode;
    let shouldSort = true;

    while (shouldSort) {
        shouldSort = false

        while (currNode.next !== null) {
            if (currNode.value > currNode.next.value) {
                storeNode = currNode.value
                currNode.value = currNode.next.value
                currNode.next.value = storeNode
                shouldSort = true
            }
            currNode = currNode.next
        }

        if(!currNode.next) {
            currNode = list.head
        }
    }
}

function sortedList () {
    const sorted = new LinkedList();
    sorted.insertLast(2);
    sorted.insertLast(1);
    sorted.insertLast(4);
    sorted.insertLast(3);  
    
    sortList(sorted)
    display(sorted)
}


console.log(sortedList())


// console.log(main())

