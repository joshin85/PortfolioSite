import {Component, Input} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {section} from '../Objects/section';
import {MenuItem} from './menuitem.component';

@Component({
    selector: 'section-menuitems',
    templateUrl : 'app/templates/menucontainer.component.html',
    directives: [MenuItem]
})


export class MenuContainer {
  @Input() sections;

  itemClicked(item){
    item.class = "active";
  }

}
