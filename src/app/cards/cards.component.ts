import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input('colors') colorList:any[] = [];
  @Output() selectedColor:EventEmitter<any> = new EventEmitter<any>();


  constructor() { }

  ngOnInit() {

  }

  selectColor(color){
    this.selectedColor.emit(color)
  }


}
