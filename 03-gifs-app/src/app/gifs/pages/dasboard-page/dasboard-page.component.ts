import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';

@Component( {
    selector: 'app-dasboard-page',
    imports: [
        RouterOutlet,
        SideMenuComponent
    ],
    templateUrl: './dasboard-page.component.html'
} )
export default class DasboardPageComponent {

}
