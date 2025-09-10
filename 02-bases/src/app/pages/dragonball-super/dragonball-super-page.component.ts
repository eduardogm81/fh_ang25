import { Component, computed, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { Character } from '../../interfaces/character.interface';
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add.component';


@Component( {
    selector: 'dragonball-super',
    imports: [
        CharacterListComponent,
        CharacterAddComponent
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

    addCharacter(character: Character) {
        this.characters.update( list => [...list, character] );
    }

    resetFields() {
        this.name.set('');
        this.power.set(0);
    }
}
