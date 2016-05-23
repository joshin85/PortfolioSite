
export class section {
  id : number;
  name : string;
  headerText : string;
  bodyText : string;
  footerText : string;
  imageURL : string;
  active : boolean;
  constructor(
    id : number,
    name : string,
    headerText : string,
    bodyText : string,
    footerText : string,
    imageURL : string
  ) {
    this.id = id;
    this.name = name;
    this.headerText = headerText;
    this.bodyText = bodyText;
    this.footerText = footerText;
    this.imageURL = imageURL;
    this.active = false;
  }
}
