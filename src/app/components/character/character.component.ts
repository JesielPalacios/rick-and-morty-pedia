import { Character } from './../../model/character';
import { CharactersService } from 'src/app/services/characters.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Episode } from 'src/app/model/episode';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent implements OnInit {
  character: Character = <Character>{};
  id: Number = 6;
  lastEpisodeData: Episode = <Episode>{};
  episodesData = new Array<Episode>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private _charactersService: CharactersService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['characterId'];

      this._charactersService
        .getCharacterById(params['characterId'])
        .subscribe(async (data) => {
          this.character = data;
          this.character.lastEpisode =
            this.character.episode[this.character.episode.length - 1];
          this.character.lastEpisode = this.character.lastEpisode.slice(-2);

          if (this.character.lastEpisode.slice(-2).indexOf('/') != -1) {
            this.character.lastEpisode = this.character.lastEpisode.slice(-1);
          }

          this._charactersService
            .getMultipleEpisodesById(this.character.episode)
            .subscribe(async (data) => {
              // console.log(data);
              this.episodesData = await data;
              // console.log(this.episodesData);
              // console.log(this.character);
            });

          // this._charactersService
          //   .getEpisodeById(this.character.lastEpisode)
          //   .subscribe((data) => {
          //     this.lastEpisodeData = data;
          //   });
        });
    });
  }

  ngOnInit(): void {}
}
