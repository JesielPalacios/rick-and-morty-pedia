import { CharactersService } from 'src/app/services/characters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css'],
})
export class FavComponent implements OnInit {
  

  constructor(private _charactersService: CharactersService) {}

  ngOnInit(): void {}
}
