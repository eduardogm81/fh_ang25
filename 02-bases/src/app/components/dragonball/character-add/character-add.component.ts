import { Component, input, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  templateUrl: './character-add.component.html'
})
export class CharacterAddComponent {
    name = signal('');
    power = signal(0);

    newCharacter = output<Character>();

    updateName(value: string) {
        this.name.set(value);
    }

    updatePower(value: string) {
        this.power.set(+value);
    }

    addCharacter() {
        if (!this.name() || !this.power() || this.power() <= 0) return;

        const newCharacter: Character = {
            // id: Math.max(...this.characters().map( c => c.id )) + 1,
            id: Math.floor(Math.random() * 1000),
            name: this.name(),
            power: this.power()
        }

        // this.characters().push(newCharacter);
        // this.characters.update( list => [...list, newCharacter] );
        this.newCharacter.emit(newCharacter);
        this.resetFields();
    }

    resetFields() {
        this.name.set('');
        this.power.set(0);
    }
}
