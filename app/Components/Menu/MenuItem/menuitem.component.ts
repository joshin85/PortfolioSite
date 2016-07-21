import {Component, Input, Type} from 'angular2/core';
import {Section} from '../../../Objects/section';
import {NgClass} from 'angular2/common';

@Component({
    selector: 'menuitem',
    templateUrl: 'app/Components/Menu/MenuItem/menuitem.component.html'
})


export class MenuItem {
  @Input() section;
  @Input() menuType;
  icon = false;

  constructor(){
    //If menu item then show icon - to avoid the convoluted world of dynamic component loaders and due to the limitation of not having dynamic template loading
    //As unfortunatley components are rendored at runtime
    if(this.menuType == "icon")
      this.icon = true;

  }



  activateSection (){
    this.section.active = true;
  }
}
