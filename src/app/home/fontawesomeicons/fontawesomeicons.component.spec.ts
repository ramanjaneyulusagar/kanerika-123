import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontawesomeiconsComponent } from './fontawesomeicons.component';

describe('FontawesomeiconsComponent', () => {
  let component: FontawesomeiconsComponent;
  let fixture: ComponentFixture<FontawesomeiconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FontawesomeiconsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FontawesomeiconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
