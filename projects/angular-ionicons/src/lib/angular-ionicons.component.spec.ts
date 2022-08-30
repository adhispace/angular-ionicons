import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularIoniconsComponent } from './angular-ionicons.component';

describe('AngularIoniconsComponent', () => {
  let component: AngularIoniconsComponent;
  let fixture: ComponentFixture<AngularIoniconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularIoniconsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularIoniconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
