import {Queue} from './queue';
import {QueueImplementation} from './queueImplementation';

let queue: Queue<number> = new QueueImplementation(45,4889,544,57,98,9);

console.log(queue.peek());
console.log(queue.toArray());
queue.enqueue(55);
while (!queue.isEmpty()) {
    console.log(queue.dequeue());

}
console.log(queue.size());