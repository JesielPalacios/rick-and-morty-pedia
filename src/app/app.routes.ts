
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CharactersComponent } from './components/characters/characters.component';

const APP_ROUTES: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'personajes', component: CharactersComponent },
  // { path: 'personaje/:id', component: CharacterComponent },
  // { path: 'buscar/:termino', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
