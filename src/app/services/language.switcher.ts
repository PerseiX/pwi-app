import {TranslateService} from '@ngx-translate/core';
import {Injectable} from '@angular/core';

@Injectable()
export class LanguageSwitcher {

    constructor(private translate: TranslateService) {
        this.translate.use(this.getLanguage());
    }

    switchLanguage(language: string) {
        this.translate.use(language);
        this.updateLanguage(language);
    }

    getLanguage() {
        let language = localStorage.getItem('language');

        if (null === language) {
            language = this.updateLanguage('pl');
        }

        return language;
    }

    private updateLanguage(language: string) {
        localStorage.setItem('language', language);

        return language;
    }
}