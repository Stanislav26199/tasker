import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  @Output() showCreateMode:EventEmitter<any> = new EventEmitter<any>();
  @Output() showTaskList: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }



  public  selectedCreateMode():void{
    this.showCreateMode.emit("create");
  }

  public  selectedTaskList():void{
    this.showTaskList.emit("tasks");
  }

}
