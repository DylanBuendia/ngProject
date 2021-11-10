import { Component, Input, OnInit } from '@angular/core';
import { ProductInt } from '../models/productInt';

@Component({
  selector: 'ngApp-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input() product ?: ProductInt;

  constructor() { }

  ngOnInit(): void {
  }

}
