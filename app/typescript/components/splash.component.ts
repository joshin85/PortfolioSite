import {Component, View} from 'angular2/core';

@Component({
    selector: 'splash'
})

@View({
  templateUrl: 'app/templates/splash.component.html'
})

export class Splash {

  constructor(){

  }

  ngAfterContentInit(){
    var bgImage = new Image();
    bgImage.src = "http://192.168.1.97:3000/app/images/1005141859b.jpg";
    bgImage.onload = function(){
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
