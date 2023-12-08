import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraprincipalComponent } from './barraprincipal.component';

describe('BarraprincipalComponent', () => {
  let component: BarraprincipalComponent;
  let fixture: ComponentFixture<BarraprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraprincipalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
