import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { DndModule } from 'ngx-drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports:      [ BrowserModule, FormsModule ,NgxGraphModule,DndModule,BrowserAnimationsModule],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
