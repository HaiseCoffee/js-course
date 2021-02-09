const me = {
    name: 'Fran',
    age: 18,
    print() {
        console.log(`Name: ${this.name} - age: ${this.age}`);
    }
}

// me.print();

function Person(name, age) {
    console.log("executed");

    this.name = name;
    this.age = age;

    this.print = function() {
        console.log(`Name: ${this.name} - age: ${this.age}`);
    }
}

const marie = new Person('Marie', 18);
marie.print();