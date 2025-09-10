import { Component, computed, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { Character } from '../../interfaces/character.interface';


@Component( {
    selector: 'dragonball-super',
    imports: [
        CharacterListComponent
    ],
    templateUrl: './dragonball-super-page.component.html'
} )
export class DragonballSuperPageComponent {

    name = signal('');
    power = signal(0);

    characters = signal<Character[]>([
        { id: 1, name: 'Goku', power: 9001 },
        { id: 2, name: 'Vegeta', power: 9000 },
        /*{ id: 3, name: 'Piccolo', power: 3000 },
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
