import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the Contacts provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Contacts {

  constructor(public http: Http) {
    console.log('Hello Contacts Provider');
  }

  /**
   * Get contacts data
   * @returns {Promise<TResult|T>}
   */
  getContacts(){
    return this.http.get('./assets/data/contacts.json')
      .toPromise()
      .then(response => response.json())
      .catch( err => {
        return Promise.reject(err)
      })
  }

  /**
   * Grouping contacts
   * @param array
   * @returns {any}
   */
  grouping(array:Array<any>):Array<any> {

    let groupContacts:Array<any>;
    const letterStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#";

    if(array.length <= 0)  return [];

    // Create a parent container
    groupContacts = letterStr.split('')
      .map( (str) => {
        return {
          groupName:str,
          contacts:[]
        }
      } );

    // Push into the correct group
    groupContacts.forEach( (item) => {

      for( let i of array){
        if(i.displayName[0].toUpperCase() === item.groupName){
          item.contacts.push(i)
        }else{
          if( letterStr.indexOf(i.displayName[0]) === -1
            || i.displayName[0] === '#'){
            groupContacts[groupContacts.length-1].push(i)
          }
        }
      }

    });

    return groupContacts;

  }

}
