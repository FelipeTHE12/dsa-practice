import { describe, expect, it } from "vitest";
import { SinglyLinkedList } from "../../../../src/data-structures/SingleLinkedList/SinglyLinkedList";


describe('SingleLinkedList', () => {
    describe('Add', () => {
        it('Should add the value to the head and tail when its empty', () => {
            const linkedList = new SinglyLinkedList<number>();
            expect(linkedList.head).toStrictEqual(null);
            expect(linkedList.tail).toStrictEqual(null);
            linkedList.add(5);
            expect(linkedList.head?.val).toStrictEqual(5);
            expect(linkedList.tail?.val).toStrictEqual(5);
        })

        it('When a value is already added should only change the tail', () => {
            const linkedList = new SinglyLinkedList<number>();
            linkedList.add(5);
            linkedList.add(10);
            expect(linkedList.tail?.val).toStrictEqual(10);
        })
    })

    describe('Size', () => {
        it('Should return 0 when just created and 1 after Add has been called with', () => {
            const linkedList = new SinglyLinkedList<number>();
            expect(linkedList.size()).toStrictEqual(0);
            linkedList.add(5);
            expect(linkedList.size()).toStrictEqual(1);
        })
    })
})