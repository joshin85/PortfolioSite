import {Component, View} from 'angular2/core';

import {SideMenu} from './components/menuside.component';
import {Splash} from './components/splash.component';
import {section} from './Objects/section';
import globals  = require('./Data/sections');

@Component({
    selector: 'Portfolio-Shinjo',
})

@View({
  templateUrl: 'app/templates/home.component.html',
    directives: [SideMenu, Splash]
})

export class home {
  public sections : section[];
  constructor () {
      this.sections = globals.sections;
  }
}
