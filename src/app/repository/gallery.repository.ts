import {Injectable} from '@angular/core';
import GalleryItem from '../model/gallery_item.model';

@Injectable()
export class GalleryRepository {
    private galleries: Array<GalleryItem>;
    private lang: string;

    constructor() {
        this.galleries = [];
    }

    addItem(item: GalleryItem) {
        this.galleries.push(item);
    }

    getGalleries() {
        return this.galleries;
    }

    getItem(id: number) {
        return this.galleries[id];
    }

    setLang(lang: string) {
        this.lang = lang;
    }

    getLang() {
        return this.lang;
    }

    clearCollection() {
        this.galleries = [];
    }
}