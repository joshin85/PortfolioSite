import {Component, Input} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {Section} from '../Objects/section';
import {MenuItem} from './menuitem.component';

@Component({
    selector: 'menucontainer',
    templateUrl : 'app/templates/menucontainer.component.html',
    directives: [MenuItem]
})


export class MenuContainer  {
  @Input() sections;
  @Input() menuType : string;
  constructor() {
  }



}
