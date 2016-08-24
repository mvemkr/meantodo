import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule} from '@angular/http';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {routing} from "./app.routes";
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {TodosComponent} from "./components/todos/todos.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        RouterModule,
        routing],
    declarations: [
        AppComponent,
        HomeComponent,
        TodosComponent
    ],
    bootstrap: [ AppComponent ]
})
@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.component.html',
    directives: [NavbarComponent, TodosComponent]
})
export class AppComponent {

}