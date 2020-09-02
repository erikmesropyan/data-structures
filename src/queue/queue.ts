
export interface Queue<T> {
    dequeue(): T | undefined,
    enqueue(value: T): boolean,
    peek(): T | null,
    isEmpty(): boolean,
    size(): number,
    toArray(): Array<T>
}