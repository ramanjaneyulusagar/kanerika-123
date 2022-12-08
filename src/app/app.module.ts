import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenuModule } from 'primeng/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { enableProdMode } from '@angular/core';
import { HeaderComponent } from './home/header/header.component';
import { AccordionModule } from 'primeng/accordion'; //accordion and accordion tab
import { MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontawesomeiconsComponent } from './home/fontawesomeicons/fontawesomeicons.component';
import { MatsidenavComponent } from './home/matsidenav/matsidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
//import{MatButtonModule} from '@angular/material'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatsidenavlistComponent } from './matsidenavlist/matsidenavlist.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FontawesomeiconsComponent,
    MatsidenavComponent,
    MatsidenavlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    MenuModule,
    PanelMenuModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatBadgeModule,MatTabsModule,MatBadgeModule,MatListModule,MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(public faIconLibrary: FaIconLibrary) {
    faIconLibrary.addIconPacks(fas, far, fab);
  }
}
