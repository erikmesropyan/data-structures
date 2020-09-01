export interface List<T> extends Iterable<T>{
    pop(): T | undefined;
    push(value: T): boolean;
    size(): number;
    getFirst(): T | null;
    getLast(): T | null;
    get(index: number): T | null;
    remove(object: T): T | null;
    addFirst(value: T): boolean;
    removeFirst(): T | undefined;
    exists(value: T): boolean;
    toArray(): Array<T> | null;
    addAll(values: Array<T>): boolean;
}