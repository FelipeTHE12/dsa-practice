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
        if (index < 0 || index > this.size()) {
            return null
        }

        let currentNode: LinkedListNode<T> = this.head!;
        let count = 1;
        while (count <= index) {
            if (currentNode.next) currentNode = currentNode.next;
            count++;
        }

        return currentNode.val;
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