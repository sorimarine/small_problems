/*
input: string
output: logging to console

rules:
- input string is a series of one or more valid commands
- commands are separated by a single space
- all commands are valid
- stack starts []
- register 0

algorithm:
- declare stack = []
- declare register = 0
- break string into array of commands
- for each command:
  - run the appropriate function. probably use a switch
  
n (number):
- assign register = number

push():
- push register onto stack

add():
- register += stack.pop()

sub():
- register -= stack.pop()

mult():
- register *= stack.pop()

div():
- register /= stack.pop(), floor it

remainder():
- register %= stack.pop()

pop():
- register = stack.pop()

print()
- log the register
*/

let stack = [];
let register = 0;

const COMMANDS_MAP = {
  PUSH: push,
  ADD: add,
  SUB: sub,
  MULT: mult,
  DIV: div,
  REMAINDER: remainder,
  POP: pop,
  PRINT: print,
};

function n(number) {
  register = Number(number);
}

function push() {
  stack.push(register);
}

function add() {
  register += stack.pop();
}

function sub() {
  register -= stack.pop();
}

function mult() {
  register *= stack.pop();
}

function div() {
  register = Math.floor(register / stack.pop());
}

function remainder() {
  register %= stack.pop();
}

function pop() {
  register = stack.pop();
}

function print() {
  console.log(register);
}

function minilang(commandStr) {
  let commands = commandStr.split(" ");
  commands.forEach((command) => {
    if (!COMMANDS_MAP.hasOwnProperty(command)) return n(command);

    COMMANDS_MAP[command]();
  });
}

minilang("PRINT");
// 0

minilang("5 PUSH 3 MULT PRINT");
// 15

minilang("5 PRINT PUSH 3 PRINT ADD PRINT");
// 5
// 3
// 8

minilang("5 PUSH POP PRINT");
// 5

minilang("3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT");
// 5
// 10
// 4
// 7

minilang("3 PUSH PUSH 7 DIV MULT PRINT");
// 6

minilang("4 PUSH PUSH 7 REMAINDER MULT PRINT");
// 12

minilang("-3 PUSH 5 SUB PRINT");
// 8

minilang("6 PUSH");
// (nothing is printed because the `program` argument has no `PRINT` commands)
