import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {GalleryComponent} from './gallery/gallery.component';
import {HeaderComponent} from './common/header/header.component';
import {FooterComponent} from './common/footer/footer.component';
import {GalleryItemComponent} from './gallery-item/gallery-item.component';
import {GalleryRepository} from './repository/gallery.repository';
import {GalleryFetcher} from './services/gallery.fetcher';
import {LanguageSwitcher} from './services/language.switcher';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

const appRoutes: Routes = [
    {path: '', redirectTo: '/about', pathMatch: 'full'},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'gallery', component: GalleryComponent},
    {path: 'gallery/:id', component: GalleryItemComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        ContactComponent,
        GalleryComponent,
        HeaderComponent,
        FooterComponent,
        GalleryItemComponent
    ],
    imports: [
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        TranslateModule.forRoot({
                loader: {
                    provide: TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [HttpClient]
                }
            }
        )
    ],
    providers: [
        GalleryRepository,
        GalleryFetcher,
        LanguageSwitcher
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
