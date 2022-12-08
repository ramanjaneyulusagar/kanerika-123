import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-matsidenavlist',
  templateUrl: './matsidenavlist.component.html',
  styleUrls: ['./matsidenavlist.component.scss'],
})
export class MatsidenavlistComponent implements OnInit {
  @Output() closeSideNav = new EventEmitter();
  ngOnInit() {}
  onToggleClose() {
    this.closeSideNav.emit();
  }
}
