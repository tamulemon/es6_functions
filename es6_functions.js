//Classes 2pts
//
//Class with inheritance 2pts

class Pokemon {
	constructor(name, level) {
		this.name = name;
		this.level = level;
		this.trainer = '';
		this.experience = 0;
		this.battleStats = {speed:0, attack:0};
		this.techniques = [];
		this.evolution = false;
	}
	greet() {
		console.log(`Hello, I am ${this.name}`);
	}
	
	getName() {
		return this.name;	
	}
	
	getLevel() {
		return this.level;
	}
	
	setLevel(x) {
		this.experience = x;
	}
	
	beCaptured(person) {
		this.trainer = person;
	}
	
	eat(x) {
		this.battleStats.speed ++;
	}
	
	learn(x) {
		this.techniques.push(x);
	}
	
	evolute() {
		if(this.techniques.length >= 5) {
			this.elution = true;
		}
	}
	
	battle(result) {
		if(result === 'win') {
			this.battleStats.speed ++ ;
			this.battleStates.attack ++;
			experience ++;
		} 
		else if(result === 'loose') {
			this.battleStates.attack --;
			experience ++;
		} 
		else {
			experience ++;
		} 
	}
	
	getExp() {
		return this.experience;
	}

}

// sub-class with inheritance
class Pikachu extends Pokemon{
  constructor(name, level) {
    super(name, level = 6);  //Default arguments 
		this.evolution = true;  
		this.captures = [];
  }
  
	capture(x) {
		this.experience += x.getExp();
		this.captures.push(x);
	}
	
	//arrow function
	getCaptures() {
    this.captures.forEach(c =>
      console.log(`${this.name} captures ${c.getName()}`)); //template string
  }
}

let seedFrog = new Pokemon ('seedFrog', 2);
seedFrog.greet();

let pikachuMonster = new Pikachu ('pikachuMonster');
pikachuMonster.greet();
pikachuMonster.capture(seedFrog);
pikachuMonster.getCaptures();
console.log(pikachuMonster.getLevel());

//Extra feature of your choice - destructuring- swapping
let x = 4;
let y = 5;
[x, y] = [y, x];
console.log(x);
console.log(y);


// for.. of loop
require("babel/polyfill");
let testArr = ['a', 9, 'b', 'c', 11];
var sum = 0;
for (let x of testArr) {
	if(!isNaN(x)) {
			sum += x;
		}
}
console.log(sum);

// es6 generator, just a small function to try
function *foo(x) {
    var y = 1 + (yield 'abc');
    return y;
}

let func = foo();
console.log(func.next()); // will log out the data that is sent out by 'yield' { value: 'abc', done: false }
console.log(func.next(4)); // will send in 4 to replace the yield expression, and y is calculated. and because y is returned so done is true{ value: 'abc', done: false }


////generator function 2, two way communication
function *test(x) {
    let y = 2 * (yield (x + 1));
    let z = yield (y / 3);
    return (x + y + z);
}

var it = test( 5 );
// note: not sending anything into `next()` here
console.log( it.next() );       // { value:6, done:false }
console.log( it.next(7) );   // { value:7*2/3 = 4.67, done:false } 7 will be replacing the first yield
console.log( it.next(0) );   // { value:19, done:true } x = 5, y = 14, z = 0s
console.log( it.next() )    // nothing to return


/// another generator
function *test2(x) {
  let y = x + 1;
	yield y;
	let z = y * 3;
	yield z;
	return y;
}

var it = test2( 5 );
console.log( it.next() );    // { value:6 (value of y), done:false }
console.log( it.next() );   // { value:18 (value of z), done:false } 
console.log( it.next() );   // { value:6 (value of y), done:true } 



/// Here is a generator for the pascal triangle
function* pascal(){
  let curr = [1, 1];
  var next;
  while (true){  
		next = []
    for(var i = 0; i < curr.length -1; i++) {
				next.push(curr[i] + curr[i+1]);
			}
		next.push(1);
		next.unshift(1);
		curr = next;
    let result = yield curr;
  }
}
var row = pascal();
console.log(row.next().value);     	// row 3
console.log(row.next().value); 			// row 4
console.log(row.next().value); 			// row 5
console.log(row.next().value); 			// row 6
console.log(row.next().value); 			// row 7
console.log(row.next().value); 			// row 8



//Promises 
let fs = require('fs');
var p = new Promise ((resolve, reject) => {
	console.log('start promise...');
	fs.readFile('./readme.txt', (err, data) => {
		!err ? resolve(data.toString()) : reject(err);
	});
});

p.then((data) => {
	console.log(`it is successfully resolved. Here's the data...`);
	console.log(data);
}).catch((err) =>{
	console.log(err);
}); 
