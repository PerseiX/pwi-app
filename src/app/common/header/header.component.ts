import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {GalleryFetcher} from '../../services/gallery.fetcher';
import {LanguageSwitcher} from '../../services/language.switcher';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    constructor(private languageSwitcher: LanguageSwitcher) {
    }

    switchLanguage(language: string) {
        this.languageSwitcher.switchLanguage(language);
    }

    getLanguage(){
       return  this.languageSwitcher.getLanguage();
    }
}
