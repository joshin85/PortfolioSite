import {Component, Input} from 'angular2/core';
import {Section} from '../Objects/section';
import {NgClass} from 'angular2/common';

@Component({
    selector: 'menuitem',
    templateUrl : 'app/templates/menuitem.component.html'
})

export class MenuItem {
  @Input() section;
  activateSection (){
    this.section.active = true;
  }
}
