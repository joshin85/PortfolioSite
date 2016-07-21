import {Component, Input} from 'angular2/core';
import {MenuContainer} from './menucontainer.component';
import {MenuItem} from './menuitem.component';
import {Section} from '../Objects/section';

@Component({
    selector: 'splash',
    templateUrl: 'app/templates/entry.component.html',
    directives: [MenuContainer]
})

export class Entry {
  @Input() sections;


  constructor(){
  }

  ngAfterContentInit(){
    //Load background image and hide loader
    var bgImage = new Image();
    bgImage.src = "http://192.168.1.97:3000/app/images/bandw.jpg";
    bgImage.onload = function(){
      var loader = document.getElementById("loader");
      loader.style.opacity = "0";
      var background = document.getElementById("background-fixed");
      var titlebar = document.getElementById("title-bar");
      var hamburger = document.getElementById("navmenu-side");
      background.style.background = "url(" + bgImage.src + ")  no-repeat fixed";
      background.style.backgroundSize = "cover";
      background.style.opacity = "1";
      titlebar.style.opacity = "1";
      if(hamburger != null)
        hamburger.style.opacity = "1";
    };

  }

}
