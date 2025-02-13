import { describe, expect, it } from "vitest";
import { SinglyLinkedList } from "../../../../src/data-structures/SingleLinkedList/SinglyLinkedList";


describe('SingleLinkedList', () => {
    describe('add', () => {
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

    describe('size', () => {
        it('Should return 0 when just created and 1 after Add has been called with', () => {
            const linkedList = new SinglyLinkedList<number>();
            expect(linkedList.size()).toStrictEqual(0);
            linkedList.add(5);
            expect(linkedList.size()).toStrictEqual(1);
        })
    })

    describe('pop', () => {
        it('When i have a list with 5 values, should remove the last and decrease lenght', () => {
            const linkedList = new SinglyLinkedList<number>();
            linkedList.add(1);
            linkedList.add(2);
            linkedList.add(3);
            linkedList.add(4);
            linkedList.add(5);
            linkedList.pop();
            expect(linkedList.tail?.val).toStrictEqual(4);
            expect(linkedList.tail?.next).toStrictEqual(null);
            expect(linkedList.size()).toStrictEqual(4);
        })

        it('When pop is called with only one node, should reset both head and tail, also lenght should be 0', () => {
            const linkedList = new SinglyLinkedList<number>();
            linkedList.add(1);
            linkedList.pop();
            expect(linkedList.tail).toStrictEqual(null);
            expect(linkedList.head).toStrictEqual(null);
            expect(linkedList.size()).toStrictEqual(0);
        })
    })

    describe('shif', () => {
        it('Should remove the head of the list and decrease size', () => {
            const linkedList = new SinglyLinkedList<number>();
            linkedList.add(1);
            linkedList.add(2);
            linkedList.shift();
            expect(linkedList.head?.val).toStrictEqual(2);
            expect(linkedList.head?.next).toStrictEqual(null);
            expect(linkedList.size()).toStrictEqual(1);
        })
    })


    describe('unShift', () => {
        it('Should add value to the head of the list and increase size', () => {
            const linkedList = new SinglyLinkedList<number>();
            linkedList.add(1);
            linkedList.add(2);
            linkedList.unShift(3);
            expect(linkedList.head?.val).toStrictEqual(3);
            expect(linkedList.head?.next?.val).toStrictEqual(1);
            expect(linkedList.size()).toStrictEqual(3);
        })
    })
})