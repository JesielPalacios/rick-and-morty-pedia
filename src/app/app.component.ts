import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'rickAndMortyPedia';
  menuOptions: Array<string> = ['Personajes', 'Personaje'];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.title = 'Rick&MortyPedia';
    this.menuOptions = new Array<string>('Personajes', 'Personaje');
  }
}
