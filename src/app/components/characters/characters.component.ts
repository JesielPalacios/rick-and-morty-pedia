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

  constructor(private _charactersService: CharactersService) {}

  ngOnInit(): void {
    this._charactersService.getAllCharacters().subscribe(({ results }: any) => {
      this.characters = results;
    });
  }
}
