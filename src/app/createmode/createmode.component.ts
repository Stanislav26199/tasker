import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BsLocaleService} from 'ngx-bootstrap';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-createmode',
  templateUrl: './createmode.component.html',
  styleUrls: ['./createmode.component.css']
})
export class CreatemodeComponent implements OnInit {

  @Output() newTask:EventEmitter<any> = new EventEmitter<any>();
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();

  colorTheme = 'theme-default';
  bsConfig: Partial<BsDatepickerConfig>;


  locale = 'ru';
  public category:string[] = [
    "Хобби",
    "Важное",
    "Работа",
    "Прочее"
  ];

  constructor(private localeService: BsLocaleService) {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
    console.log("maxdate " + this.maxDate);
    console.log("bsRangeValue " + this.bsRangeValue);
  }


  ngOnInit() {
    // this.localeService.use(this.locale);
    this.bsConfig = Object.assign({}, { containerClass: this.colorTheme })
  }


  public addTask(header, notes, type,date):void{
    let task = {
      header: header,
      notes : notes,
      type: type,
      date: this.bsValue
    };

    this.newTask.emit(task);
  }

}
