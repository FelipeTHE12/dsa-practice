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

    describe('getFromIndex', () => {
        it('If the given index is below 0 should return null', () => {
            const linkedList = new SinglyLinkedList<number>();
            expect(linkedList.getFromIndex(-1)).toStrictEqual(null);
        })

        it('If the given index is greather than the size should return null', () => {
            const linkedList = new SinglyLinkedList<number>();
            linkedList.add(1);
            linkedList.add(10);
            expect(linkedList.getFromIndex(2)).toStrictEqual(null);
        })

        it('Should return the value on the specified index', () => {
            const linkedList = new SinglyLinkedList<number>();
            linkedList.add(1);
            linkedList.add(7);
            linkedList.add(20);
            expect(linkedList.getFromIndex(2)).toStrictEqual(20);
        })
    })

    describe('set', () => {
        it('Should alter the node of the current index with the given value', () => {
            const linkedList = new SinglyLinkedList<number>();
            linkedList.add(1);
            linkedList.add(5);
            linkedList.add(10);
            linkedList.set(2, 30);
            expect(linkedList.getFromIndex(2)).toStrictEqual(30);
        })
    })

    describe('insert', () => {
        it('If the list is empty should insert new node and assign it to the head', () => {
            const linkedList = new SinglyLinkedList<number>();
            linkedList.insert(0, 20);
            expect(linkedList.head?.val).toStrictEqual(20)
        })

        it('should add a new node on the index given and the altered node should be on the next position', () => {
            const linkedList = new SinglyLinkedList<number>();
            linkedList.add(5);
            linkedList.add(10);
            linkedList.add(15);
            linkedList.insert(1, 20);
            expect(linkedList.getFromIndex(0)).toStrictEqual(5);
            expect(linkedList.getFromIndex(1)).toStrictEqual(20);
            expect(linkedList.getFromIndex(2)).toStrictEqual(10);
            expect(linkedList.getFromIndex(3)).toStrictEqual(15);
            expect(linkedList.size()).toStrictEqual(4);
        })
    })

    describe('removeWithIndex', () => {
        it('Should remove the node that is on the position of index', () => {
            const linkedList = new SinglyLinkedList<number>();
            linkedList.add(5);
            linkedList.add(10);
            linkedList.removeWithIndex(1);
            expect(linkedList.head?.next).toStrictEqual(null);
            expect(linkedList.getFromIndex(1)).toStrictEqual(null);
            expect(linkedList.size()).toStrictEqual(1);
        })

        it('When the head is removed it should be null', () => {
            const linkedList = new SinglyLinkedList<number>();
            linkedList.add(5);
            linkedList.removeWithIndex(0);
            expect(linkedList.head).toStrictEqual(null);
            expect(linkedList.size()).toStrictEqual(0);
        })

        it('When the last item is removed the tail should be reassigned', () => {
            const linkedList = new SinglyLinkedList<number>();
            linkedList.add(5);
            linkedList.add(10);
            linkedList.add(15);
            linkedList.removeWithIndex(2)
            expect(linkedList.tail?.val).toStrictEqual(10);
        })

        it('When a index greather than the size is given it should do nothing', () => {
            const linkedList = new SinglyLinkedList<number>();
            linkedList.add(5);
            linkedList.add(10);
            linkedList.removeWithIndex(2)
            expect(linkedList.size()).toStrictEqual(2);
        })
    })

    describe('reverse', () => {
        it('Should reverse the nodes in the list', () => {
            const linkedList = new SinglyLinkedList<number>();
            linkedList.add(5);
            linkedList.add(10);
            linkedList.add(25)
            linkedList.reverse()
            expect(linkedList.getFromIndex(0)).toStrictEqual(25)
            expect(linkedList.getFromIndex(1)).toStrictEqual(10)
            expect(linkedList.getFromIndex(2)).toStrictEqual(5)
        })
    })
})