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
        this.length--;

        if (this.size() === 0) this.resetHeadAndTail()
    }

    private resetHeadAndTail() {
        this.tail = null;
        this.head = null;
    }
}