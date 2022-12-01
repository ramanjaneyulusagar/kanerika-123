import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftmainpageComponent } from './nftmainpage.component';

describe('NftmainpageComponent', () => {
  let component: NftmainpageComponent;
  let fixture: ComponentFixture<NftmainpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftmainpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NftmainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
