import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  @Input('title') applicationName: string | undefined;
  @Input() menuOptions: Array<string> | undefined;

  ngOnInit(): void {}
}
