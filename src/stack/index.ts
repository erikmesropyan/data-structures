import {Stack} from './stack';
import {StackImplementation} from './stackImplementation';


let stack: Stack<number> = new StackImplementation(45,4889,544,57,98,9);

// console.log(stack.peek());
console.log(stack.toArray());
stack.push(55);
while (!stack.isEmpty()) {
    console.log(stack.pop());

}
console.log(stack.size());