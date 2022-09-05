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

    for (let i = 0; i < idx.length; i++) {
      if (i === 0) {
        if (idx[i].slice(-2).indexOf('/') != -1) {
          episodesIdUrl += idx[i].slice(-1).toString();
        } else {
          episodesIdUrl += idx[i].slice(-2).toString();
        }
      } else {
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

  parsedIdUrl(idx: any) {
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
      this.apiUrl + '/character/' + this.parsedIdUrl(idx)
    );
  }
}
