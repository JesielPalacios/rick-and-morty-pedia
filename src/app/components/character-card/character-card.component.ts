import { CharactersService } from 'src/app/services/characters.service';
import { Character } from 'src/app/model/character';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css'],
})
export class CharacterCardComponent implements OnInit {
  toggle: boolean = true;
  @Input('character') character: Character = <Character>{};

  constructor(private _charactersService: CharactersService) {}

  ngOnInit(): void {
    console.log('this.characters');
    console.log(this.character);
  }

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
}
