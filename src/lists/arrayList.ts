import {List} from './list';

export class ArrayList<T> implements List<T> {

    private array: Array<T>;

    constructor() {
        this.array = new Array<T>();
    }

    public addAll(values: T[]): boolean {
        this.array.push(...values);
        return true;
    }


    public add(value: T): boolean {
        this.array.push(value);
        return true;
    }

    public get(index: number): T {
        return this.array[index];
    }

    public remove(object: T): boolean {
        let isRemoved: boolean = false;
        this.array = this.array.filter(element => {
            if (element === object) {
                isRemoved = true;
            }
            return element !== object;
        })
        return isRemoved;
    };

    public removeIndex(index: number): boolean {
        return !!this.array.splice(index, 1);
    };

    public set(index: number, value: T): boolean {
        if (this.array[index]) {
            this.array[index] = value;
            return true;
        }
        return false;
    }

    public size(): number {
        return this.array.length;
    }

    public toArray(): Array<T> {
        return Array.from(this.array);
    }

    [Symbol.iterator](): IterableIterator<T> {
        return this.array[Symbol.iterator]();
    }

    next(...args: [] | [undefined]): IteratorResult<T, any> {
        return this.array[Symbol.iterator]().next();
    }

}