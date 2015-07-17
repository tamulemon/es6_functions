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

//
//Promises 2pts
//
//For 2 points of extra credit implement an es6 generator.



