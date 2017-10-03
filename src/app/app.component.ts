import { Component } from '@angular/core';
import { UserComponent } from './components/user/user.component';
import { GooglecivicapiService } from './services/googlecivicapi.service';
import { CivicinfoComponent } from './components/civicinfo/civicinfo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user:UserComponent;

}
