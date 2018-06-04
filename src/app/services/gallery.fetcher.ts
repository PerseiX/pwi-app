import {Injectable} from '@angular/core';
import GalleryItem from '../model/gallery_item.model';
import {HttpClient} from '@angular/common/http';
import {GalleryRepository} from '../repository/gallery.repository';
import {TranslateService} from '@ngx-translate/core';

@Injectable()
export class GalleryFetcher {
    constructor(private http: HttpClient, private galleryRepository: GalleryRepository, private translateService: TranslateService) {
    }

    async getGalleries() {
        const lang = this.translateService.currentLang;

        if (this.galleryRepository.getGalleries().length === 0 || this.galleryRepository.getLang() !== lang) {

            const json: any =
                await this.http.get('./assets/i18n/' + lang + '.json')
                    .toPromise()
                    .then(r => r);

            const items = json.gallery.items;
            this.galleryRepository.clearCollection();

            for (const item in items) {
                this.galleryRepository.addItem(
                    new GalleryItem(
                        items[item].img,
                        items[item].alt,
                        items[item].title,
                        items[item].content,
                        items[item].author,
                        items[item].date
                    )
                );
            }
            this.galleryRepository.setLang(lang);
        }
        return this.galleryRepository;
    }
}