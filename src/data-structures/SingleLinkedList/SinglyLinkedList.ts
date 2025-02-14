class LinkedListNode<T> {
    val: T;
    next: LinkedListNode<T> | null;

    constructor(val: T) {
        this.val = val;
        this.next = null;
    }
}

export class SinglyLinkedList<T> {
    head: LinkedListNode<T> | null = null;
    tail: LinkedListNode<T> | null = null;
    private length: number = 0

    add(val: T): void {
        const node = new LinkedListNode(val);

        if (!this.head) {
            this.head = node
            this.tail = node;
        } else {
            this.tail!.next = node;
            this.tail = node;
        }
        this.length++;
    }

    size(): number {
        return this.length;
    }

    pop(): void {
        if (!this.head) return;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.decreaseLength();

        if (this.size() === 0) this.resetHeadAndTail()
    }

    shift(): void {
        if (!this.head) return;
        const currentHead = this.head.next
        this.head = null;
        this.head = currentHead;
        this.decreaseLength();

        if (this.size() === 0) {
            this.tail = null;
            this.tail
        }
    }

    unShift(value: T): void {
        const newNode = new LinkedListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            const currentHead = this.head
            this.head = newNode
            this.head.next = currentHead;
            this.increaseLenght();
        }
    }

    getFromIndex(index: number): T | null {
        if (index < 0 || index > this.size() - 1) {
            return null
        }

        let currentNode: LinkedListNode<T> = this.head!;
        let count = 0;
        while (count < index) {
            if (currentNode.next) currentNode = currentNode.next;
            count++;
        }

        return currentNode.val;
    }

    set(index: number, newValue: T): void {
        if (index < 0 || index > this.size() - 1) {
            return
        }

        let currentNode: LinkedListNode<T> = this.head!;
        let count = 0;
        while (count < index) {
            if (currentNode.next) currentNode = currentNode.next;
            count++;
        }

        currentNode.val = newValue;
    }

    insert(index: number, newValue: T): void {
        if (index < 0 || index > this.size()) {
            return
        }

        if (this.size() === 0) this.unShift(newValue);

        if (index === this.size()) this.add(newValue);

        const newNode = new LinkedListNode(newValue);

        let counter = 0;
        let currentNode = this.head;
        let previusNode = currentNode;

        while (counter < index) {
            previusNode = currentNode;
            currentNode = currentNode?.next || null;
            counter++;
        }

        previusNode!.next = newNode;
        newNode.next = currentNode;
        this.increaseLenght();
    }

    removeWithIndex(index: number): void {
        if (index < 0 || index > this.size() - 1) {
            return
        }

        let counter = 0;
        let currentNode = this.head;
        let previusNode = currentNode;

        while (counter < index) {
            previusNode = currentNode;
            currentNode = currentNode?.next || null;
            counter++;
        }

        previusNode!.next = currentNode?.next || null;
        this.tail = previusNode;
        this.decreaseLength();

        if (this.size() === 0) {
            this.head = null;
            this.tail = null;
        }
    }

    reverse(): void {
        if (this.size() === 0 || this.size() === 1) return;

        let previousNode = null;
        let currentNode = this.head;
        let nextNodeToIterate;


        while (currentNode != null) {
            nextNodeToIterate = currentNode.next;
            currentNode.next = previousNode;
            previousNode = currentNode;
            currentNode = nextNodeToIterate;
        }

        this.head = previousNode;
    }


    private resetHeadAndTail() {
        this.tail = null;
        this.head = null;
    }

    private decreaseLength(): void {
        this.length--;
    }

    private increaseLenght(): void {
        this.length++;
    }
}