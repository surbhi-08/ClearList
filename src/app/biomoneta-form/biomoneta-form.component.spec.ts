import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiomonetaFormComponent } from './biomoneta-form.component';

describe('BiomonetaFormComponent', () => {
  let component: BiomonetaFormComponent;
  let fixture: ComponentFixture<BiomonetaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiomonetaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiomonetaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
