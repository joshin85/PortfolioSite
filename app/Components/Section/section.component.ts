import {Component, Input} from 'angular2/core';
import {Section} from '../../Objects/section';
import {NgClass} from 'angular2/common';
import {MenuContainer} from '../Menu/MenuContainer/menucontainer.component';

@Component({
    selector: 'section-container',
    templateUrl : 'app/Components/Section/section.component.html',
    directives: [MenuContainer]
})

export class SectionContainer {
  @Input() sections;
  @Input() section;
  menuActive : boolean;

  //Determine the type of menu that will be used
  @Input() menuType;
  constructor(){
    this.menuType = "icon";
    this.menuActive =  false;
  }

  toggleMenu (){
    this.menuActive = !this.menuActive;
  }
}
