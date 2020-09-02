import {Stack} from './stack';


export class StackImplementation<T> implements Stack<T> {

    private readonly stack: Array<T>  = [];

    constructor(...values: T[]) {
        if (values) {
            this.stack = [...values];
        }
    }

    toArray(): T[] {
     return Array.from(this.stack);
    }


    isEmpty(): boolean {
        return this.stack.length === 0;
    }

    peek(): T | null {
        return this.stack[this.stack.length - 1];
    }

    pop(): T | null {
        if (this.stack.length > 0) {
            let element = this.stack[this.stack.length -1];
            this.stack.length = this.stack.length - 1;
            return element;
        }
        return null;
    }

    push(value: T): void {
        if (!value)
            return;

        this.stack.push(value);
    }

    size(): number {
        return this.stack.length;
    }

}