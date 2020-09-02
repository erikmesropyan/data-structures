import {List} from './list';

class Node<T> {
    constructor(public value: T, public next: Node<T> | null = null, public prev: Node<T> | null = null) {
    }
}


export class LinkedList<T> implements List<T> {
    private firstElement: Node<T> | null = null;
    private lastElement: Node<T> | null = null;
    private length: number = 0;

    constructor(value?: T) {
        if (value) {
            this.firstTimeInitialize(value);
        }
    }

    public addFirst(value: T): boolean {
        if (value) {
            if (this.firstElement) {
                this.firstElement = new Node(value, this.firstElement);
                this.increaseSize();
            } else {
                this.firstTimeInitialize(value);
            }
            return true;
        }
        return false;
    }

    public exists(value: T): boolean {
        if (!this.firstElement || !value)
            return false;

        let node: Node<T> | null = this.firstElement;
        let exist = false;
        while (node !== null) {
            if (node.value === value) {
                exist = true;
                break;
            } else {
                node = node.next;
            }
        }
        return exist;
    }

    public pop(): T | undefined {
        if (this.lastElement) {
            const value = this.lastElement.value;
            let prev = this.lastElement.prev;
            if (prev) {
                prev.next = null;
                this.lastElement = prev;
            } else {
                this.lastElement = null;
                this.firstElement = null;
            }
            this.decreaseSize();
            return value;
        }
        return undefined;
    }

    public push(value: T): boolean {
        if (!value)
            return false;

        if (this.lastElement && this.lastElement.value) {
            let element = this.lastElement;
            element.next = new Node<T>(value, null, element);
            this.lastElement = element.next;
            this.increaseSize();
        } else if (this.firstElement) {
            this.lastElement = new Node<T>(value, null, this.firstElement);
            this.firstElement.next = this.lastElement;
            this.increaseSize();
        } else {
            this.firstTimeInitialize(value);
        }
        return true;
    }

    public remove(object: T): T | null {
        if (!object)
            return null;

        let node = this.firstElement;
        let element = null;
        while (node !== null) {
            if (node.value === object) {
                element = node;
                break;
            }
            node = node.next;
        }
        if (element) {
            let next = element.next;
            let prev = element.prev;
            if (next && prev) {
                next.prev = prev;
                prev.next = next
            } else if (next) {
                next.prev = null;
            } else if (prev) {
                prev.next = null;
            } else {
                this.lastElement = null;
                this.firstElement = null;
            }
            this.decreaseSize();
            return element.value;
        }

        return null;
    }

    public removeFirst(): T | undefined {
        if (!this.firstElement)
            return undefined;

        let node = this.firstElement;
        if (node.next) {
            this.firstElement = node.next;
            this.firstElement.prev = null;
        } else {
            this.lastElement = null;
            this.firstElement = null;
        }
        this.decreaseSize();
        return node.value;
    }

    public size(): number {
        return this.length;
    }

    private firstTimeInitialize(value: T): void {
        this.firstElement = new Node<T>(value);
        this.increaseSize();
    }

    private increaseSize(): void {
        this.length++;
    }

    private decreaseSize(): void {
        this.length--;
    }

    public addAll(values: Array<T>): boolean {
        if (!values || values.length === 0)
            return false;
        let i = false;
        if (!this.firstElement) {
            this.firstTimeInitialize(values[0]);
            i = true;
        }
        values.forEach((value, index) => {
            if (i && index === 0)
                return;
            if (!this.lastElement) {
                this.lastElement = new Node<T>(value, null, this.firstElement);
                this.increaseSize();
                return;
            }
            this.lastElement.next = new Node(value, null, this.lastElement);
            this.lastElement = this.lastElement.next;
            this.increaseSize();
        })
        return true;
    }

    public get(index: number): T | null {
        if (!this.firstElement)
            return null;
        let counter = 0;
        let node: Node<T> | null = this.firstElement;
        while (counter !== index && node) {
            node = node.next;
            counter++;
        }
        if (counter === index && node) {
            return node.value;
        }

        return null;
    }

    public getFirst(): T | null {
        if (this.firstElement)
            return this.firstElement.value;

        return null;
    }

    public getLast(): T | null {
        if (this.lastElement)
            return this.lastElement.value;

        return null;
    }

    public toArray(): Array<T> | null {
        let arr: T[] | null = [];
        if (!this.firstElement)
            return arr;

        let node: Node<T> | null = this.firstElement;
        while (node) {
            arr.push(node.value);
            node = node.next;
        }
        return arr;
    }

    [Symbol.iterator](): Iterator<T> {
        let element = this.firstElement;
        return {
            next(): IteratorResult<T, any> {
                if (element) {
                    let value = element.value;
                    element = element.next;
                    return {
                        done: false,
                        value: value
                    }
                } else {
                    return {
                        done: true,
                        value: null
                    }
                }
            }
        };
    }

}