import {LanguageSwitcher} from './services/language.switcher';
import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
    constructor(private router: Router) {
    }

    ngOnInit() {
        this.router.events.subscribe(tmp => {
            if ((tmp instanceof NavigationEnd)) {
                window.scroll(0, 0);
            }
        });
    }
}