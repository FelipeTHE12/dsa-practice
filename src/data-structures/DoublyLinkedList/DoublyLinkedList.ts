class DoublyLinkedListNode<T> {
    val: T;
    next: DoublyLinkedListNode<T> | null;
    previous: DoublyLinkedListNode<T> | null;

    constructor(val: T) {
        this.val = val;
        this.next = null;
        this.previous = null;
    }
}

export class DoublyLinkedList<T> {
    head: DoublyLinkedListNode<T> | null = null;
    tail: DoublyLinkedListNode<T> | null = null;
    private length: number = 0

    add(val: T): void {
        const newNode = new DoublyLinkedListNode(val);
        if (!this.head) {
            this.head = newNode
            this.tail = newNode;
            newNode.previous = null;
        } else {
            this.tail!.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }

    pop(): void {
        if (this.size() === 0) return;

        if (this.size() === 1) {
            this.head = null;
            this.tail = null;
            return
        }

        const previousNode = this.tail!.previous;
        if (previousNode) previousNode.next = null;
        this.tail = previousNode;
        this.length--;
    }

    size(): number {
        return this.length;
    }
}