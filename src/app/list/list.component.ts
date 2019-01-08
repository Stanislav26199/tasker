import {Component, Input, OnInit} from '@angular/core';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  @Input('taskList') tasks:any[];
  @Input() showSearch:any;
  public selected: any;
  public tasksHeader:string[] = [];
  public tasksCopy: any[];

  constructor() { }

  ngOnInit() {
    this.tasksCopy = this.tasks;
    for (let i = 0; i < this.tasks.length; i++) {
        this.tasksHeader.push(this.tasks[i].header);
    }
  }

  public findElement():void{
    if(this.selected == ''){
      this.tasksCopy = this.tasks;
    }else {
      for (let i = 0; i < this.tasks.length; i++) {
        if (this.tasks[i].header == this.selected) {
          let temp = this.tasks[i];
          this.tasksCopy = [];
          this.tasksCopy.push(temp);
          break;
        }
      }
    }
  }

  public removeElement(value):void{
    this.tasks.splice(this.tasks.indexOf(value),1);
  }

}
