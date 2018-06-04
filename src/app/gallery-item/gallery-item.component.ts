import {GalleryFetcher} from '../services/gallery.fetcher';
import GalleryItem from '../model/gallery_item.model';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-gallery-item',
    templateUrl: './gallery-item.component.html',
    styleUrls: ['./gallery-item.component.scss']
})
export class GalleryItemComponent implements OnInit {

    gallery: GalleryItem;

    constructor(private galleryFetcher: GalleryFetcher, private route: ActivatedRoute, private translate: TranslateService) {
        this.gallery = new GalleryItem(null, '', '', '', '', '');
    }

    ngOnInit() {
        const galleryId = this.route.snapshot.params['id'];

        this.translate.onLangChange.subscribe(() => {
            this.galleryFetcher.getGalleries().then(r => this.gallery = r.getItem(galleryId));
        });
        this.galleryFetcher.getGalleries().then(r => this.gallery = r.getItem(galleryId));

    }

}
