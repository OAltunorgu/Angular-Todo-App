import { UnDoneModel } from './../../models/unDoneModel';
import { DoneModel } from './../../models/doneModel';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss'],
})
export class DoneComponent implements OnInit {
  @Input() doneModels: DoneModel[];
  @Input() unDoneModels: UnDoneModel[];
  constructor() {}

  ngOnInit(): void {}

  changeDoneItem(doneModel: DoneModel) {
    this.unDoneModels.push(doneModel);
    let index = this.doneModels.indexOf(doneModel);
    this.doneModels.splice(index, 1);
  }
}
