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

// Pipes
import {
  CharacterStatusIconPipe,
  CharacterStatusPipe,
  CharacterSpeciesPipe,
} from './pipes/character-status.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CharactersComponent,
    FooterComponent,
    CharacterStatusIconPipe,
    CharacterStatusPipe,
    CharacterSpeciesPipe,
  ],
  imports: [BrowserModule, APP_ROUTING, HttpClientModule],
  providers: [CharactersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
