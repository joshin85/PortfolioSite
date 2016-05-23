import {Component, OnInit, Input} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {MenuContainer} from './menucontainer.component';



@Component({
    selector: 'sidemenu',
    templateUrl: 'app/templates/menuside.component.html',
    directives: [MenuContainer]
})


export class SideMenu {
  @Input() sections;
  on = false;
  name : string;
  backdrop = false;
  constructor() {
    this.name = "Menu";
  }

  showMenuSide(){
    this.on = !this.on;
    this.backdrop = !this.backdrop;
  }

}
