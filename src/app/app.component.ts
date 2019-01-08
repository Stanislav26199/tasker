import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NetCracker';

  listtask:any[] = [];
  public showCreateMode:boolean = true;
  public showTaskList: boolean;


  public pushTask(value){
    this.listtask.push(value);
  }


  showMode(value){
    if(value == "create"){
      this.showCreateMode = true;
      this.showTaskList = false;
    }
    if(value == "tasks"){
      this.showTaskList = true;
      this.showCreateMode = false;
    }
  }

}
