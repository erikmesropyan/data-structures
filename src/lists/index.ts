import {List} from './list';
import {ArrayList} from './arrayList';


let list: List<number> = new ArrayList();

console.log(list.add(1));
list.addAll([2,2,4,5,6]);
console.log(list.size());

console.log(list.set(0, 15));

console.log(list.toArray());

list.remove(4);

console.log(list);

for (const number of list) {
    console.log(number);
}