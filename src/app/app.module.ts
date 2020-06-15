import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component'
import { DreamsComponent } from './dreams/dreams.component';
import { ArcGISComponent } from './arcgis/arcgis.component';
import { MaterialComponent } from './material/material.component';
import { PomodoroComponent } from './pomodoro/pomodoro.component';
import { TodoComponent } from './todo/todo.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    DreamsComponent,
    ArcGISComponent,
    MaterialComponent,
    PomodoroComponent,
    TodoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatRadioModule,
    DragDropModule,
    MatCheckboxModule,
    MatTableModule,
    MatFormFieldModule,
    MatMenuModule,
    MatIconModule,
    MatButtonToggleModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
