import { Component, computed, signal } from '@angular/core';
import { NgClass } from '@angular/common';

interface Character {
    id: number;
    name: string;
    power: number;
}

@Component( {
    selector: 'app-dragonball',
    templateUrl: './dragonball-page.component.html'
} )
export class DragonballPageComponent {

    name = signal('');
    power = signal(0);

    characters = signal<Character[]>([
        { id: 1, name: 'Goku', power: 9002 },
        /*{ id: 2, name: 'Vegeta', power: 9000 },
        { id: 3, name: 'Piccolo', power: 3000 },
        { id: 4, name: 'Yamcha', power: 500 },*/
    ])

    powerClasses = computed( () => {
        return {
            'text-danger': true
        }
    } );

    addCharacter() {
        if (!this.name() || !this.power() || this.power() <= 0) return;

        const newCharacter: Character = {
            id: Math.max(...this.characters().map( c => c.id )) + 1,
            name: this.name(),
            power: this.power()
        }

        // this.characters().push(newCharacter);
        this.characters.update( list => [...list, newCharacter] );
        this.resetFields();
    }

    resetFields() {
        this.name.set('');
        this.power.set(0);
    }
}
