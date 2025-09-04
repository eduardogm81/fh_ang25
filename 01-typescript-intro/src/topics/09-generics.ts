
console.log('Generics');

export function whatIsMyType<T>(argument: T): T {
    return argument;
}

let AmIString = whatIsMyType<string>('Hola mundo');
let AmINumber = whatIsMyType<number>(100);
let AmIArray = whatIsMyType<number[]>([100, 200, 300]);


console.log(AmIString.split(' '));
console.log(AmINumber.toFixed());
console.log(AmIArray.join('-'));