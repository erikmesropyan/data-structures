
export interface Stack<T> {
    push(value: T): void,
    pop(): T | null,
    peek(): T | null,
    isEmpty(): boolean,
    size(): number,
    toArray(): Array<T>
}