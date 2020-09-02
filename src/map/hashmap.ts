import {Map} from './map'


class Entry<K, V> {
    constructor(public key: K, public value: V, public next: Entry<K, V> | null = null) {
    }
}

export class HashMap<K, V> implements Map<K, V> {

    private readonly entries: Array<Entry<K, V>>;
    private length: number;

    constructor(size: number = 10) {
        if (size === 0) {
            size = 10;
        }
        this.entries = new Array<Entry<K, V>>(size);
        this.length = 0;
    }

    // this algorithm should have another implementation
    private hash(key: string): number {
        let total = 0;
        for (let i = 0; i < key.length; i++) total += key.charCodeAt(i);
        return total % this.entries.length;
    }


    containsKey(key: K): boolean {
        if (!key)
            return false;

        try {
            const hash = this.hash(JSON.stringify(key));
            if (!this.entries[hash])
                return false;

            let entry: Entry<K, V> | null = this.entries[hash];
            while (entry !== null) {
                if (entry.key === key) {
                    return true;
                }
                entry = entry.next;
            }
            return false;
        } catch (e) {
            return false;
        }
    }

    get(key: K): V | null {
        if (!key)
            return null;

        try {
            const hash = this.hash(JSON.stringify(key));
            if (!this.entries[hash])
                return null;

            let entry: Entry<K, V> | null = this.entries[hash];
            while (entry !== null) {
                if (entry.key === key)
                    return entry.value;

                entry = entry.next;
            }
            return null;
        } catch (e) {
            return null
        }
    }

    isEmpty(): boolean {
        return length === 0;
    }

    keys(): Array<K> | null {
        if (this.size() === 0)
            return null;

        return this.getKeysOrValues('key');
    }

    put(key: K, value: V): boolean {
        if (!key || !value)
            return false;

        try {
            const hash = this.hash(JSON.stringify(key));
            if (!this.entries[hash]) {
                this.entries[hash] = new Entry<K, V>(key, value);
                this.increaseSize();
                return true;
            } else {
                let entry: Entry<K, V> | null = this.entries[hash];
                while (entry !== null) {
                    if (entry.key === key) {
                        entry.value = value;
                        return true;
                    }
                    if (entry.next === null) {
                        entry.next = new Entry<K, V>(key, value);
                        this.increaseSize();
                        return true;
                    }
                    entry = entry.next;
                }
                return false;
            }
        } catch (e) {
            return false;
        }
    }

    remove(key: K): boolean {
        try {
            const hash = this.hash(JSON.stringify(key));

            if (!this.entries[hash])
                return false;

            let entry: Entry<K, V> | null = this.entries[hash];
            let prev = null;
            while (entry) {
                if (entry.key === key) {
                    if (!prev) {
                        if (entry.next) {
                            this.entries[hash] = entry.next;
                        } else {
                            // @ts-ignore
                            this.entries.splice(hash, 1, undefined);
                        }
                        this.decreaseSize();
                        return true;
                    }
                    prev.next = entry.next;
                    this.decreaseSize();
                    return true;
                }
                prev = entry;
                entry = entry.next;
            }
        } catch (e) {
            return false;
        }
        return false;
    }

    size(): number {
        return this.length;
    }

    values(): Array<V> | null {
        if (this.size() === 0)
            return null;

        return this.getKeysOrValues('value');
    }

    private increaseSize(): void {
        this.length++;
    }

    private decreaseSize(): void {
        this.length--;
    }

    private getKeysOrValues(elementName: string): Array<any> | null {
        if (elementName !== 'key' && elementName !== 'value') {
            return null;
        }

        let array: Array<K | V> = [];

        this.entries.forEach(element => {
            if (!element)
                return;

            let entry: Entry<K, V> | null = element;
            while (entry !== null) {
                array.push(entry[elementName]);
                entry = entry.next;
            }
        })
        return array;
    }

}