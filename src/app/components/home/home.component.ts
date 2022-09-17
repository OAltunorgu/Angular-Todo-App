import { UnDoneModel } from './../../models/unDoneModel';
import { DoneModel } from './../../models/doneModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  unDoneModels: UnDoneModel[] = [];
  doneModels: DoneModel[] = [];

  constructor() {}

  ngOnInit(): void {}
}
