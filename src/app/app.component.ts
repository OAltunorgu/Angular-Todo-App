import { DoneModel } from './models/doneModel';
import { UnDoneModel } from './models/unDoneModel';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-todo-app';
}
