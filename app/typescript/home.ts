import {Component, View} from 'angular2/core';

import {sidemenu} from './components/menuside.component';
import {splash} from './components/splash.component';
import {section} from './Objects/section';

@Component({
    selector: 'Portfolio-Shinjo',
})

@View({
  templateUrl: 'app/templates/home.component.html',
    directives: [sidemenu, splash]
})

export class home {
  constructor(){

  }
  onClick(){
    alert("hello");
  }
}

var sections: section[] = [
  { "id" : 1, "name" : "About Me", "headerText":"About Me", "bodyText":"Body","footerText":"Footer", "imageURL":"null" }
];
