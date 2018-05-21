import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './common/header/header.component';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

const appRoutes: Routes = [
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'gallery', component: GalleryComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        ContactComponent,
        GalleryComponent,
        HeaderComponent
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
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
