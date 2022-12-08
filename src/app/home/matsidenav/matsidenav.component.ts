import { Component, OnInit, EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
@Component({
  selector: 'app-matsidenav',
  templateUrl: './matsidenav.component.html',
  styleUrls: ['./matsidenav.component.scss'],
})
export class MatsidenavComponent implements OnInit {
  @Output() sideNavToggle = new EventEmitter();

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  openSidenav() {
    this.sideNavToggle.emit();
  }
}
