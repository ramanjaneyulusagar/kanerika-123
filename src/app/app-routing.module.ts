import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinechartComponent } from './echarts/linechart/linechart.component';
import { FontawesomeiconsComponent } from './home/fontawesomeicons/fontawesomeicons.component';
import { HeaderComponent } from './home/header/header.component';
import { MatsidenavComponent } from './home/matsidenav/matsidenav.component';
import { MatsidenavlistComponent } from './matsidenavlist/matsidenavlist.component';


const routes: Routes = [
  {path:'header',component:HeaderComponent},
  {path:'fonticon',component:FontawesomeiconsComponent},
  {path:'matsidenav',component:MatsidenavComponent},
  {path:'matsidenavlist',component:MatsidenavlistComponent},
  {path:'linechart',component:LinechartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
