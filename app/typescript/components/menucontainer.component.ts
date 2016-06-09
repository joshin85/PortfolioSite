import {Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, SimpleChange,OnChanges} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {Section} from '../Objects/section';
import {MenuItem} from './menuitem.component';

@Component({
    selector: 'menucontainer',
    templateUrl : 'app/templates/menucontainer.component.html',
    directives: [MenuItem],

    changeDetection: ChangeDetectionStrategy.CheckAlways
})


export class MenuContainer  {
  @Input() sections;
  active : Section;

  ngOnInit() {
    this.active = this.sections[0]; //set the default value to the first section
  }

  //Handle enabling and disabling sections
  ngDoCheck(){
    let cur = this.active;
    this.sections.map((x) => { 
      if(!x.equals(cur) && x.active) {
        cur.active = false;
        this.active = x;
      } else {
        x.active = false;
      }
    });
  }

}
