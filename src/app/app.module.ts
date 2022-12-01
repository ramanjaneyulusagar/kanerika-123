import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {enableProdMode} from '@angular/core';
import { PageComponent } from './page/page.component';
import { NftmainpageComponent } from './nftmainpage/nftmainpage.component';
@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    NftmainpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
