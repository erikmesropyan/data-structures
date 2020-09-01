export interface List<T> extends IterableIterator<T>{

    set(index: number, value: T): boolean;
    add(value: T): boolean;
    addAll(values: Array<T>): boolean;
    remove(object: T): boolean;
    removeIndex(index: number): boolean;
    get(index: number): T;
    size(): number;
    toArray(): Array<T>;
}

