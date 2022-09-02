import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../model/character';
import { CharacterInformation } from './../model/characterinformation';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  characters: Character[] = [];

  private characterssUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<CharacterInformation> {
    return this.http.get<CharacterInformation>(this.characterssUrl);
  }
}
