import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  public category:string[] = [
    "Все",
    "Хобби",
    "Важное",
    "Работа",
    "Прочее"
  ];



  constructor() { }

  ngOnInit() {
  }

}
