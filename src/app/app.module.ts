import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Routes
import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CharactersComponent } from './components/characters/characters.component';
import { FooterComponent } from './components/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CharactersComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
