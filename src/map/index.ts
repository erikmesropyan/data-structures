import {HashMap} from './hashmap';
import { Map } from './map';


let map: Map<string, number> = new HashMap(0);

map.put('5',5);
map.put('6',6);
map.put('7',7);
map.put('8',8);
map.put('3',2);
map.put('54',23);
map.put('52',55);
map.put('55',55);
map.put('25',55);
map.put('235',55);
map.put('525',55);
map.put('525',5554);
map.put('5235',55);

// console.log(map.remove('55'));
// console.log(map.remove('525'));
// console.log(map.remove('3'));
// console.log(map.remove('5'));
// console.log(map.remove('5'));
// console.log(map.get('55'));
console.log(map.remove('3'));
console.log(map.get('525'));
// console.log(map.containsKey('3'));
console.log(map.keys());
console.log(map.values());
const values = map.keys() || [];
values.forEach(value => {
    map.remove(value);
})
console.log(map.keys());
console.log(map.values());
console.log(map.size());