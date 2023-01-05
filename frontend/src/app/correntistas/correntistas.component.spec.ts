import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrentistasComponent } from './correntistas.component';

describe('CorrentistasComponent', () => {
  let component: CorrentistasComponent;
  let fixture: ComponentFixture<CorrentistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrentistasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorrentistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
