import { CharactersService } from 'src/app/services/characters.service';
import { Character } from 'src/app/model/character';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css'],
})
export class FavComponent implements OnInit {
  toggle: boolean = true;

  @Input() character: Character = <Character>{};

  constructor(private _charactersService: CharactersService) {}

  ngOnInit(): void {}

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
