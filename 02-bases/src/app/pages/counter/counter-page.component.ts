import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component( {
    templateUrl: './counter-page.component.html',
    styleUrl: './counter-page.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterPageComponent {
    counter = 10;
    countersignal = signal(10);

    constructor(  ) {
        /*setInterval(
            () => {
                this.counter += 1;
                this.countersignal.update((v) => v + 1 );
                console.log('Tick');
            }, 2000
        );*/
    }


    increaseBy( value: number ): void {
        this.counter += value;
        // this.countersignal.set( this.countersignal() + value );
        this.countersignal.update( current => current + value );

    }

    resetCounter(): void {
        this.counter = 0;
        this.countersignal.set( 0 );
    }
}
