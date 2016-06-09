import {Component, View} from 'angular2/core';
import {SideMenu} from './components/menuside.component';
import {Entry} from './components/entry.component';
import {SectionContainer} from './components/section.component';
import {Section} from './Objects/section';
import globals  = require('./Data/sections');

@Component({
    selector: 'Portfolio-Shinjo',
})

@View({
  templateUrl: 'app/templates/home.component.html',
    directives: [SideMenu, Entry, SectionContainer]
})

export class home {
  public sections : Section[];
  constructor () {
      this.sections = globals.sections;
  }


}
