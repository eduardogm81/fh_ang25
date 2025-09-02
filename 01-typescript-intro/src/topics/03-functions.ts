function addNumbers(a: number, b: number) {
    return a + b;
}

const addNumbersArrow = (a: number, b: number): string => `${a + b}`;

function multiply(firstNumber: number, secondNumber?: number, base: number = 2): number {
    return firstNumber * base;
}


// const result: number = addNumbers(1, 2);
// console.log({ result })
// const resultArrow: string = addNumbersArrow(3, 4);
// console.log({ resultArrow });
// const multiplyResult: number = multiply(5);
// console.log(multiplyResult);

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = ( character: Character, amount: number ) => {
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${ this.hp }`);
    }
}
healCharacter(strider, 10);
strider.showHp();


export {}