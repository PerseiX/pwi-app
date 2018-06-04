export default class GalleryItem {
    private img: string;
    private alt: string;
    private title: string;
    private content: string;
    private author: string;
    private date: string;

    constructor(img: string, alt: string, title: string, content: string, author: string, date: string) {
        this.img = img;
        this.alt = alt;
        this.title = title;
        this.content = content;
        this.author = author;
        this.date = date;
    }

    getImg() {
        return this.img;
    }

    getAlt() {
        return this.alt;
    }

    getTitle() {
        return this.title;
    }

    getContent() {
        return this.content;
    }

    getDate() {
        return this.date;
    }

    getAuthor() {
        return this.author;
    }
}