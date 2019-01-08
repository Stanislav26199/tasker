import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {


  @Input() datatask:any;
  @Output() removetask:EventEmitter<any> = new EventEmitter<any>();
  public category:string[] = [
    "Хобби",
    "Важное",
    "Работа",
    "Прочее"
  ];


  public bodyColor:any;


  constructor() { }

  ngOnInit() {
    if(this.datatask.type == this.category[0]){
      this.bodyColor = "warning";
    }else{
      if(this.datatask.type == this.category[1]){
        this.bodyColor = "danger";
      }else{
        if(this.datatask.type == this.category[2]){
          this.bodyColor = "info"
        }else{
          this.bodyColor = "success"
        }
      }
    }
  }


  public deleteTask():void{
    this.removetask.emit(this.datatask);
  }

}
