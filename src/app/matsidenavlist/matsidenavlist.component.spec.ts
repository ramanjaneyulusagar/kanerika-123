import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatsidenavlistComponent } from './matsidenavlist.component';

describe('MatsidenavlistComponent', () => {
  let component: MatsidenavlistComponent;
  let fixture: ComponentFixture<MatsidenavlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatsidenavlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatsidenavlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
