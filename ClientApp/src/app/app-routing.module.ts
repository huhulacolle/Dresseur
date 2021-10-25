import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListeDresseurComponent } from './components/liste-dresseur/liste-dresseur.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { FetchDataComponent } from './components/fetch-data/fetch-data.component';
import { SearchComponent } from './components/search/search.component';
import { DateComponent } from './components/date/date.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dresseur', component: ListeDresseurComponent },
  { path: 'pokemon', component: PokemonComponent },
  { path: 'search', component: SearchComponent},
  { path: 'fetch-data', component: FetchDataComponent },
  { path: 'date', component: DateComponent},
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
    })
  ],
  exports: [RouterModule],
})

export class AppRoutingModule { }
