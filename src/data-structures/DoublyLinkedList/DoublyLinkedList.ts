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

class DoublyLinkedList<T> {
    head: DoublyLinkedListNode<T> | null = null;
    tail: DoublyLinkedListNode<T> | null = null;
    private length: number = 0
}