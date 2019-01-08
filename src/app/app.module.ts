import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { TaskComponent } from './task/task.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreatemodeComponent } from './createmode/createmode.component';
import { ListComponent } from './list/list.component';
import { MenuComponent } from './menu/menu.component';
import {BsDatepickerModule, TabsModule, TypeaheadModule} from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    TaskComponent,
    NavbarComponent,
    CreatemodeComponent,
    ListComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    TypeaheadModule.forRoot(),
    FormsModule,
    TabsModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
