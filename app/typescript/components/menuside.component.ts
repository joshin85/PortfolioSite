import {Component, View} from 'angular2/core';
import {NgClass, NgFor} from 'angular2/common';
import {menuitems} from './menuitems.component';



@Component({
    selector: 'sidemenu',
    templateUrl: 'app/templates/menuside.component.html',
    directives: [menuitems]
})


export class sidemenu {
  on = false;
  backdrop = false;
  constructor() {

  }

  showMenuSide(){
    this.on = !this.on;
    this.backdrop = !this.backdrop;
  }

}
