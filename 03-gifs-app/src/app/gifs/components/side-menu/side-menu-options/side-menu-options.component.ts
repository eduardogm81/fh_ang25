import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GifsService } from '../../../services/gifs.service';

interface MenuOption {
    label: string;
    sublabel: string;
    route: string;
    icon: string;
}

@Component( {
    selector: 'gifs-side-menu-options',
    imports: [
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './side-menu-options.component.html'
} )
export class SideMenuOptionsComponent {

    gifsService = inject(GifsService);

    menuOptions: MenuOption[] = [
        {
            icon: 'fa-solid fa-chart-line',
            label: 'Trending',
            sublabel: 'Gifs populares',
            route: 'trending',
        },
        {
            icon: 'fa-solid fa-magnifying-glass',
            label: 'Buscador',
            sublabel: 'Buscar gifs',
            route: 'search',
        }
    ];

}
