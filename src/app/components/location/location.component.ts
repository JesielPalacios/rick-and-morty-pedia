import { CharactersService } from 'src/app/services/characters.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from 'src/app/model/location';
import { Character } from 'src/app/model/character';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent implements OnInit {
  id: Number = 1;
  characters = new Array<Character>();
  location: Location = <Location>{};

  constructor(
    private activatedRoute: ActivatedRoute,
    private _charactersService: CharactersService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['locationId'];

      this._charactersService
        .getLocationById(params['locationId'])
        .subscribe(async (data) => {
          this.location = data;

          this._charactersService
            .getMultipleCharactersById(this.location.residents)
            .subscribe(async (data) => {
              console.log(data)
              this.characters = data;
            });
        });
    });
  }

  ngOnInit(): void {}
}
