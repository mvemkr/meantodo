import { Component } from '@angular/core';
import {TodoService} from "../../services/todo.service";

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [TodoService]
})
export class HomeComponent {

}