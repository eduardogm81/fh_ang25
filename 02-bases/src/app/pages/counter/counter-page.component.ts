import { Component } from '@angular/core';

@Component( {
    templateUrl: './counter-page.component.html',
    styleUrl: './counter-page.component.css',
})
export class CounterPageComponent {
    counter = 10;

    increaseBy( value: number ): void {
        this.counter += value;
    }

    resetCounter(): void {
        this.counter = 10;
    }
}
