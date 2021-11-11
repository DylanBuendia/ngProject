import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngApp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() itemsCounter  : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
