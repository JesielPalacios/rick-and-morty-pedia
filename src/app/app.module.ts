import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Routes
import { APP_ROUTING } from './app.routes';

// Services
import { CharactersService } from './services/characters.service';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CharactersComponent } from './components/characters/characters.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CharacterComponent } from './components/character/character.component';

// Pipes
import {
  CharacterStatusIconPipe,
  CharacterStatusPipe,
  CharacterSpeciesPipe,
  CharacterLocationPipe,
  CharacterGenderPipe,
  CharacterEpisodesPipe,
} from './pipes/character-status.pipe';

@NgModule({
  declarations: [
    // Components
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CharactersComponent,
    CharacterComponent,
    FooterComponent,
    // Pipes
    CharacterStatusIconPipe,
    CharacterStatusPipe,
    CharacterSpeciesPipe,
    CharacterLocationPipe,
    CharacterGenderPipe,
    CharacterEpisodesPipe,
  ],
  imports: [BrowserModule, APP_ROUTING, HttpClientModule],
  providers: [CharactersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
