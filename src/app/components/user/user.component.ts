import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { GooglecivicapiService } from '../../services/googlecivicapi.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  firstname:string;
  lastname:string;
  address:Address;
  voterinfo:VoterInfo;
  electedofficial:string;

  constructor(public googlecivicapi:GooglecivicapiService) {

    console.log('constructor ran');
  }

  ngOnInit() {
    this.firstname = 'Steve';
    this.lastname = 'Bresnick';
    this.address = {
      number:5,
      street: 'Samoset',
      streettype: 'Ln.',
      city: 'Sharon',
      state: 'MA',
      zip: '02067'
    };
    this.voterinfo = {
      roles:'legislatorLowerBody',
      levels:'country',
      reptype:null,
      repname:null
    };
    console.log('ngOnInit ran');

    /*this.googlecivicapi.getVoterData();/*
    this.googlecivicapi.getVoterData().subscribe((posts) => {
      //console.log(posts);
      this.posts = posts;
    });*/
  }

    submitFormData(data){
      var gdata = this.buildquery(this.voterinfo.roles, this.voterinfo.levels);

      gdata.subscribe((data) => {
        this.voterinfo.reptype = data.offices[0].name;
        this.voterinfo.repname = data.officials[0].name;
      });
      //this.voterinfo = GData;
    }

    buildquery(roles,levels) {
      return this.googlecivicapi.getVoterData(
        this.firstname,
        this.lastname,
        this.address.number,
        this.address.street,
        this.address.streettype,
        this.address.city,
        this.address.state,
        this.address.zip,
      roles,levels);
    }

    getPresident(){
      return this.buildquery('headOfGovernment', 'country');
    }

    getVicePresident(){
      return this.buildquery('deputyHeadOfGovernment', 'country');
    }

    getUSRep(){
      return this.buildquery('legislatorLowerBody', 'country');
    }

    getUSSenator(){
      return this.buildquery('legislatorUpperBody', 'country');
    }


/*
    addHobby(hobby){
      this.hobbies.push(hobby);
      return false;
    }

    deleteHobby(hobby) {
      for (let i = 0; i < this.hobbies.length; i++) {
        if (this.hobbies[i] == hobby) {
          this.hobbies.splice(i, 1);
        }
      }
    }
*/
}

interface Address {
  number:number,
  street:string,
  streettype:string,
  city:string,
  state:string,
  zip:string,
}

interface VoterInfo {
  roles:string,
  levels:string,
  reptype:string,
  repname:string,
}
