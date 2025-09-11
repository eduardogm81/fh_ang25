import { Component } from '@angular/core';
import { environment } from '@environments/environment';
// import { environment } from '../../../../../environments/environment';

@Component( {
    selector: 'gifs-side-menu-headers',
    imports: [],
    templateUrl: './side-menu-headers.component.html'
} )
export class SideMenuHeadersComponent {
    envs = environment;
}
