import {Component, OnInit, Input} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {MenuContainer} from '../Menu/MenuContainer/menucontainer.component';



@Component({
    selector: 'sidemenu',
    templateUrl: 'app/Components/SideMenu/menuside.component.html',
    directives: [MenuContainer]
})


export class SideMenu  {
  @Input() sections;
  menuShow = false;
  name : string;
  backdrop = false;
  constructor() {
    this.name = "Menu";
  }

  //Event for when nav button is clicked;
  showMenuSide(){
    this.menuShow = !this.menuShow;
  }



}
