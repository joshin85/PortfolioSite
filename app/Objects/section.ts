export class Section  {
  active : boolean;
  id : number;
  icon : string;
  name : string;
  headerText : string;
  bodyText : string;
  footerText : string;
  imageURL : string;

  constructor({id, icon, name, headerText, bodyText, footerText, imageURL}) {
    this.id = id;
    this.icon = icon;
    this.name = name;
    this.headerText = headerText;
    this.bodyText = bodyText;
    this.footerText = footerText;
    this.imageURL = imageURL;
    this.active = false;

  }

  equals(section : Section){
    return typeof section != "undefined" && section.id == this.id;
  }

}
