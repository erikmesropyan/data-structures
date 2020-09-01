import {List} from './list';
import {LinkedList} from './linked-list';


let list: List<number> = new LinkedList(12);

list.push(123);
list.push(54);
list.push(87516);


list.addAll([23,4235,5325,123,23,123,234]);

console.log(list.removeFirst());
console.log(list.getFirst());
console.log(list.toArray());

for (const number of list) {
    console.log(number);
}