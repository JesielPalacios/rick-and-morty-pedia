import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CharactersComponent } from './components/characters/characters.component';
import { CharacterComponent } from './components/character/character.component';
import { LocationComponent } from './components/location/location.component';

const APP_ROUTES: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'personajes', component: CharactersComponent },
  { path: 'personaje/:characterId', component: CharacterComponent },
  { path: 'ubicacion/:locationId', component: LocationComponent },
  // { path: 'buscar/:termino', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
