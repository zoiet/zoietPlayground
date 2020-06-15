import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutMeComponent } from './about-me/about-me.component';
import { DreamsComponent } from './dreams/dreams.component';
import { ArcGISComponent } from './arcgis/arcgis.component';
import { MaterialComponent } from './material/material.component';
import { PomodoroComponent } from './pomodoro/pomodoro.component';
import { TodoComponent } from './todo/todo.component';
const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'AboutMe', component: AboutMeComponent },
    { path: 'Dreams', component: DreamsComponent },
    { path: 'ArcGIS', component: ArcGISComponent },
    { path: 'Mat', component: MaterialComponent },
    { path: 'Pomodoro', component: PomodoroComponent },
    { path: 'Todo', component: TodoComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }