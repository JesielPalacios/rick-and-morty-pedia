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
  page: number = 1;

  constructor(private _charactersService: CharactersService) {}

  ngOnInit(): void {
    this._charactersService
      .getAllCharacters(this.page)
      .subscribe(({ results }: any) => {
        this.characters = results;
      });
  }

  nextPage() {
    if (this.page <= 41) {
      this.page += 1;
      console.log(this.page);

      this._charactersService
        .getAllCharacters(this.page)
        .subscribe(({ results }: any) => {
          this.characters = results;
        });
    }
  }

  previoustPage() {
    if (this.page >= 2) {
      this.page -= 1;
      console.log(this.page);

      this._charactersService
        .getAllCharacters(this.page)
        .subscribe(({ results }: any) => {
          this.characters = results;
        });
    }
  }
}
