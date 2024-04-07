import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPagesComponent } from './main-pages.component';

describe('MainPagesComponent', () => {
  let component: MainPagesComponent;
  let fixture: ComponentFixture<MainPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
