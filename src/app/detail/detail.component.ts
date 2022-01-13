import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductInt } from '../models/productInt';

@Component({
  selector: 'ngApp-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input() product ?: ProductInt;
  @Output() addToCart = new EventEmitter<number>();
  @Output() closed = new EventEmitter<ProductInt>()

  constructor() { }

  ngOnInit(): void {
  }
close(prod :ProductInt){
this.closed.emit(prod);
}
}
