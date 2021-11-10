import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductInt } from '../models/productInt';


@Component({
  selector: 'ngApp-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() prodotti : ProductInt[] =[];
  @Output() selected = new EventEmitter <ProductInt> ();


  constructor() { }

  ngOnInit(): void {
  }

  selectProduct(product:ProductInt){
    this.selected.emit(product);
  }
}
