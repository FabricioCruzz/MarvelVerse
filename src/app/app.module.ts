import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CharactersComponent } from './components/characters/characters.component';
import { ComicsComponent } from './components/comics/comics.component';
import { EventsComponent } from './components/events/events.component';
import { SeriesComponent } from './components/series/series.component';
import { StoriesComponent } from './components/stories/stories.component';
import { CharacterComponent } from './components/characters/character/character.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ListComponent } from './components/list/list.component';
import { CardTemplateComponent } from './components/card-template/card-template.component';
import { ComicComponent } from './components/comics/comic/comic.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CharactersComponent,
    ComicsComponent,
    EventsComponent,
    SeriesComponent,
    StoriesComponent,
    CharacterComponent,
    ListComponent,
    CardTemplateComponent,
    ComicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
