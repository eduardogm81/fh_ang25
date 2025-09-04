
export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: "P1"
}

const passenger2: Passenger = {
    name: "P2",
    children: ["P3", "P4"]
}

const printChildren = (passenger: Passenger): void => {
    const  howManyChildren = passenger.children?.length || 0;
    console.log(howManyChildren);
}

printChildren(passenger1);
printChildren(passenger2);

