function addNumbers(a: number, b: number) {
    return a + b;
}

const addNumbersArrow = (a: number, b: number): string => `${a + b}`;

const result: number = addNumbers(1, 2);

console.log({ result })

const resultArrow: string = addNumbersArrow(3, 4);

console.log({ resultArrow })

function multiply(firstNumber: number, secondNumber?: number, base: number = 2): number {
    return firstNumber * base;
}

const multiplyResult: number = multiply(5);

console.log(multiplyResult);

export {}