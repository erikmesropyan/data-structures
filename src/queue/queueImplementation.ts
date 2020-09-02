import {Queue} from './queue';

export class QueueImplementation<T> implements Queue<T> {

    private readonly array: Array<T> = [];

    constructor(...values: T[]) {
        if (values) {
            this.array = [...values];
        }
    }


    dequeue(): T | undefined {
        if (this.array.length > 0) {
            return this.array.shift();
        }
        return undefined;
    }

    enqueue(value: T): boolean {
        if (!value)
            return false;

        this.array.push(value);
        return true;
    }

    isEmpty(): boolean {
        return this.array.length === 0;
    }

    peek(): T | null {
        return this.array[0] || null;
    }

    size(): number {
        return this.array.length;
    }

    toArray(): Array<T> {
        return Array.from(this.array);
    }

}