

/*export class Person {
    public name: string;
    public address: string;

    constructor(name: string, address: string) {
        this.name = name;
        this.address = address;
    }
}*/

export class Person {

    constructor(
        public name: string,
        public address: string = 'No Address',
    ) { }
}

/*export class Hero extends Person {

   constructor(
        public alterEgo: string,
        public age: number,
        public realName: string) {
        super(realName, 'New York');
    }
}*/

export class Hero {

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
        ) {}
}

const ironman = new Hero('Ironman', 45, 'Tony',
    { name: 'Tony Stark' });
console.log({ person: ironman })