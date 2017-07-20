import { Component,ViewChildren,ViewChild } from '@angular/core';
import {NavController, Content} from 'ionic-angular';

import { Contacts } from  '../../providers/contacts'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  index: string = 'A';
  indexes:Array<string> = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#".split('');
  contacts:Array<any> = [];

  @ViewChildren('IonItemGroup') ionItemGroup;
  @ViewChild('IndexedMenu') indexedMenu;
  @ViewChild(Content) content: Content;

  constructor(
    public navCtrl: NavController,
    public contactsSev: Contacts,
  ) {

    this.contactsSev.getContacts()
      .then( res => {
        this.contacts = this.contactsSev.grouping(res);
        console.log(this.contacts)
      })
  }

  selectIndex(index:number){
    this.index = this.indexes[index];
    const offsetTop = this.ionItemGroup._results[index].nativeElement.offsetTop;
    this.content.scrollTo(0, offsetTop, 300);
  }


  onScroll($event) {
    console.log(this.indexedMenu)
  }

}
