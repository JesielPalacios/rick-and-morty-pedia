import { Episode } from './../model/episode';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../model/character';
import { CharacterInformation } from './../model/characterinformation';
import { Location } from '../model/location';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  characters: Character[] = [];

  private apiUrl = 'https://rickandmortyapi.com/api';
  private episodesUrl = 'https://rickandmortyapi.com/api/episode/';

  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<CharacterInformation> {
    return this.http.get<CharacterInformation>(this.apiUrl + '/character');
  }

  getCharacterById(idx: string): Observable<Character> {
    return this.http.get<Character>(this.apiUrl + '/character/' + idx);
  }

  getEpisodeById(idx: string): Observable<Episode> {
    return this.http.get<Episode>(this.apiUrl + '/episode/' + idx);
  }

  getMultipleEpisodesById(idx: string[]): Observable<Episode[]> {
    let episodesIdUrl = '';

    // Loop for create the multiple episode url made with the episodes id.

    // Before the cycle or loop a function can be implemented and controlle
    // with a conditional so that it adds the comma symbol when the first
    // interaction of the cycle / loop is not the first, but I think that
    // would make it more cumbersome / complicated.

    for (let i = 0; i < idx.length; i++) {
      // If its the first one iteration so add the first episode id on the url
      // without a colon simbol
      // console.log(i);
      // console.log(idx);
      if (i === 0) {
        if (idx[i].slice(-2).indexOf('/') != -1) {
          episodesIdUrl += idx[i].slice(-1).toString();
        } else {
          episodesIdUrl += idx[i].slice(-2).toString();
        }
      }
      // Otherwise add the first episode id on the url with a colon simbol
      // for purposes of the form or syntax in which the url of the multiple
      // episodes should be according to the Rick And Morthy api documentation:
      // https://rickandmortyapi.com/documentation/#get-multiple-episodes
      //
      else {
        if (idx[i].slice(-2).indexOf('/') != -1) {
          episodesIdUrl += ',' + idx[i].slice(-1).toString();
        } else {
          episodesIdUrl += ',' + idx[i].slice(-2).toString();
        }
      }
    }

    return this.http.get<Episode[]>(this.apiUrl + '/episode/' + episodesIdUrl);
  }

  getLocationById(idx: string): Observable<Location> {
    return this.http.get<Location>(this.apiUrl + '/location/' + idx);
  }

  parseIdUrl(idx: any) {
    let episodesIdUrl = '';

    for (let i = 0; i < idx.length; i++) {
      if (i === 0) {
        episodesIdUrl += idx[i].slice(-3).replace('/', '').replace('r', '');
      } else {
        episodesIdUrl +=
          ',' + idx[i].slice(-3).replace('/', '').replace('r', '');
      }
    }

    return episodesIdUrl;
  }

  getMultipleCharactersById(idx: string[]): Observable<Character[]> {
    return this.http.get<Character[]>(
      this.apiUrl + '/character/' + this.parseIdUrl(idx)
    );
  }
}
