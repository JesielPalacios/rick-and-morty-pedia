import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';
import { Character } from 'src/app/model/character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  characters = new Array<Character>();
  toggle: boolean = true;

  constructor(private _charactersService: CharactersService) {}

  addFav(key: any, value: any) {
    if (this.toggle) {
      this._charactersService.saveFav(key, value);
      this.toggle = !this.toggle;
    } else {
      this._charactersService.removeFav(key);
      this.toggle = !this.toggle;
    }
  }
  isFav(key: any) {
    return this._charactersService.getFav(key);
  }

  ngOnInit(): void {
    this._charactersService.getAllCharacters().subscribe(({ results }: any) => {
      this.characters = results;
    });
  }
}
