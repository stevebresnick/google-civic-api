import { Component, OnInit } from '@angular/core';
import { GooglecivicapiService } from '../../services/googlecivicapi.service';

@Component({
  selector: 'app-civicinfo',
  templateUrl: './civicinfo.component.html',
  styleUrls: ['./civicinfo.component.css']
})
export class CivicinfoComponent implements OnInit {

  url:string;
  apikey:string;

  constructor() {
    this.url = 'https://www.googleapis.com/civicinfo/v2/representatives';
    this.apikey = 'AIzaSyC1L8B93zqRg3Lofsu6p7arsdt-R9F5nF8';
  }

  ngOnInit() {
    console.log(this.url + '?key=' + this.apikey);
  }

  getInfo() {
    console.log('Get Google info Works');
  }

}
