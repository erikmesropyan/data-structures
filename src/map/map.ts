export interface Map<K,V> {
    put(key: K, value: V): boolean,
    get(key: K): V | null;
    containsKey(key: K): boolean,
    keys(): Array<K> | null,
    values(): Array<V> | null,
    isEmpty(): boolean,
    size(): number,
    remove(key: K): boolean
}