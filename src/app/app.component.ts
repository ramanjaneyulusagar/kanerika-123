import { Component, EventEmitter, Output } from '@angular/core';
import {MenuItem, PrimeIcons} from 'primeng/api';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  showFiller = false;

  @Output() closeSideNav = new EventEmitter();
  ngOnInit(){
    console.log('my-app');

  }

}
