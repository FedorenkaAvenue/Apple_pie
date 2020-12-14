import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewApllicationsComponent } from './new-apllications.component';

describe('NewApllicationsComponent', () => {
  let component: NewApllicationsComponent;
  let fixture: ComponentFixture<NewApllicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewApllicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewApllicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
