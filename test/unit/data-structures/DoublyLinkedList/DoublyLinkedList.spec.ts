import { describe, expect, it } from "vitest";
import { DoublyLinkedList } from "../../../../src/data-structures/DoublyLinkedList/DoublyLinkedList";

describe('DoublyLinkedList', () => {
    describe('add', () => {
        it('When the list is empty, should add the node at head and tail, also the previous should be null', () => {
            const list = new DoublyLinkedList<number>();
            list.add(5);
            expect(list.head?.val).toStrictEqual(5);
            expect(list.head?.val).toStrictEqual(5);
            expect(list.head?.previous).toStrictEqual(null);
        });

        it('Should increase length when a value is added', () => {
            const list = new DoublyLinkedList<number>();
            list.add(5);
            expect(list.size()).toStrictEqual(1);
        });

        it('Should add a new node to the list setting a new tail and the previous node should be linked', () => {
            const list = new DoublyLinkedList<number>();
            list.add(5);
            list.add(10);
            expect(list.head?.next?.val).toStrictEqual(10);
            expect(list.tail?.val).toStrictEqual(10);
            expect(list.tail?.previous?.val).toStrictEqual(5);
        });
    });

    describe('size', () => {
        it('Should return the length of the list', () => {
            const list = new DoublyLinkedList<number>();
            expect(list.size()).toStrictEqual(0);
            list.add(5);
            expect(list.size()).toStrictEqual(1);
        });
    });
})