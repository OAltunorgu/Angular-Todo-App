import { UnDoneModel } from './../../models/unDoneModel';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-undone',
  templateUrl: './add-undone.component.html',
  styleUrls: ['./add-undone.component.scss'],
})
export class AddUndoneComponent implements OnInit {
  @Input() unDoneModels: UnDoneModel[];
  @ViewChild('addInput') addInput: ElementRef;
  unDoneInput: string = '';

  constructor() {}

  ngOnInit(): void {}

  addUnDoneItem(addInput: any) {
    console.log(this.addInput.nativeElement.value);
    let unDoneModel = new UnDoneModel();
    unDoneModel.title = addInput.value;
    unDoneModel.date = Date();
    this.unDoneModels.push(unDoneModel);
    addInput.value = '';
  }
}
