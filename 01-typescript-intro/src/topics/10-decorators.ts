// function classDecorator(
//     constructor: any
// ) {
//     return class extends constructor {
//         newProperty = 'new property';
//         hello = 'override';
//     }
// }

// @classDecorator()
class SuperClass {
    public myProperty: string = 'Abc123';

    print() {
        console.log(`Hola mundo`);
    }
}

const myClass = new SuperClass();
console.log(SuperClass);
console.log(myClass);