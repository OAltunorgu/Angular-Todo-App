import { DoneModel } from './../../models/doneModel';
import { UnDoneModel } from './../../models/unDoneModel';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-undone',
  templateUrl: './undone.component.html',
  styleUrls: ['./undone.component.scss'],
})
export class UndoneComponent implements OnInit {
  @Input() unDoneModels: UnDoneModel[];
  @Input() doneModels: DoneModel[];
  constructor() {}

  ngOnInit(): void {}

  deleteUnDoneItem(doneModel: DoneModel) {
    let index = this.unDoneModels.indexOf(doneModel);
    this.unDoneModels.splice(index, 1);
  }

  completeUnDoneItem(doneModel: DoneModel) {
    this.doneModels.push(doneModel);
    let index = this.unDoneModels.indexOf(doneModel);
    this.unDoneModels.splice(index, 1);
  }
}
