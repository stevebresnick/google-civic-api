import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';

import { GooglecivicapiService } from './services/googlecivicapi.service';
//import { DataService } from './services/data.service';
//import { CivicinfoComponent } from './components/civicinfo/civicinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
    ],
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    HttpModule
  ],
  providers: [GooglecivicapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
