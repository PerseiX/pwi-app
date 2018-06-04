import {GalleryFetcher} from '../services/gallery.fetcher';
import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
    public galleries = [];

    constructor(private galleryFetcher: GalleryFetcher, private translate: TranslateService) {
    }

    ngOnInit() {
        this.translate.onLangChange.subscribe(() => {
            this.galleryFetcher.getGalleries()
                .then(r => {
                    this.galleries = r.getGalleries();
                });

        });

        this.galleryFetcher.getGalleries()
            .then(r => {
                this.galleries = r.getGalleries();
            });
    }
}
