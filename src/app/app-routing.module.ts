import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './components/characters/character/character.component';
import { CharactersComponent } from './components/characters/characters.component';
import { ComicsComponent } from './components/comics/comics.component';
import { EventsComponent } from './components/events/events.component';
import { SeriesComponent } from './components/series/series.component';
import { StoriesComponent } from './components/stories/stories.component';

const routes: Routes = [
  {path: '', redirectTo: 'characters', pathMatch: 'full'},
  {path: 'characters', component: CharactersComponent},
  {path: 'character', component: CharacterComponent},
  {path: 'comics', component: ComicsComponent},
  {path: 'events', component: EventsComponent},
  {path: 'series', component: SeriesComponent},
  {path: 'stories', component: StoriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
