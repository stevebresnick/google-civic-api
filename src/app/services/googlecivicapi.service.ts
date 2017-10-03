import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GooglecivicapiService {

  url:string;
  apikey:string;

  constructor(public googlecivicapi:Http) {
    //console.log('Google Civic API is Connected');
    this.url = 'https://www.googleapis.com/civicinfo/v2/representatives';
    this.apikey = 'AIzaSyC1L8B93zqRg3Lofsu6p7arsdt-R9F5nF8';
  }

  getVoterData(firstname, lastname, streetnumber, street, streettype, city, state, zip, roles, levels){
    var query = this.url + '?key=' + this.apikey + '&roles=' + roles + '&levels=' + levels + '&address=' + streetnumber + '%20' + street + '%20' + streettype + '%20' + city + '%20' + state + '%20&electionId=2000';
    //console.log(query);
    return this.googlecivicapi.get(query)
    .map(res => res.json());
  };

}
