import {Component, Input} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {Section} from '../../../Objects/section';
import {MenuItem} from '../MenuItem/menuitem.component';

@Component({
    selector: 'menucontainer',
    templateUrl : 'app/Components/Menu/MenuContainer/menucontainer.component.html',
    directives: [MenuItem]
})


export class MenuContainer  {
  @Input() sections;
  @Input() menuType : string;
  constructor() {
  }



}
