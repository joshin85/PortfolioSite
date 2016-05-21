import {Component} from 'angular2/core';
import {NgClass, NgFor} from 'angular2/common';
import {section} from '../Objects/section';

@Component({
    selector: 'section-menuitems',
    directives:[NgFor],
    templateUrl : 'app/templates/menuitems.component.html'
})


export class menuitems {
  id : number;
  name : "Menu";
  imageURL : string;
  sections = [
       new section(1, "Home", "About Me", "Body", "Footer", "null")
  ];
}
