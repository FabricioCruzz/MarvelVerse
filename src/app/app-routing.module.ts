import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './components/characters/character/character.component';
import { CharactersComponent } from './components/characters/characters.component';
import { ComicComponent } from './components/comics/comic/comic.component';
import { ComicsComponent } from './components/comics/comics.component';
import { EventComponent } from './components/events/event/event.component';
import { EventsComponent } from './components/events/events.component';
import { SerieComponent } from './components/series/serie/serie.component';
import { SeriesComponent } from './components/series/series.component';
import { StoriesComponent } from './components/stories/stories.component';
import { StoryComponent } from './components/stories/story/story.component';

const routes: Routes = [
  {path: '', redirectTo: 'characters', pathMatch: 'full'},
  {path: 'characters', component: CharactersComponent},
  {path: 'character', component: CharacterComponent},
  {path: 'comics', component: ComicsComponent},
  {path: 'comic', component: ComicComponent},
  {path: 'events', component: EventsComponent},
  {path: 'event', component: EventComponent},
  {path: 'series', component: SeriesComponent},
  {path: 'serie',component: SerieComponent},
  {path: 'stories', component: StoriesComponent},
  {path: 'story', component: StoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
