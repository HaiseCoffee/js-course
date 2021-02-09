class Person {

    name;
    code;
    phrase;
    age;

    constructor(name, code, phrase, age) {
        if(!name) throw Error('We need a name'); // Just if they don't pass a name.

        this.name = name;
        this.code = code;
        this.phrase = phrase;
        this.age = age;
    }

    set setName(name) {
        this.name = name;
    }

    get getName() {
        return this.name;
    }

    whoAmI() {
        console.log(`Nombre: ${this.name}, code ${this.code}`)
    }

    doubleAge(number) {
        return (this.age * number);
    }
}

const test = new Person('Name', 'ABC123', 'blablaba', 2);


console.log(test);
test.whoAmI();
const doAge = test.doubleAge(2);
console.log(doAge);
console.log(test.getName);