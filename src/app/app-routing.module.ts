import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NftmainpageComponent } from './nftmainpage/nftmainpage.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [{ path: 'page', component: PageComponent },
{path:'nftmainpage',component:NftmainpageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
