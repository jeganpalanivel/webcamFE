import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebcomComponent } from './webcom.component';

describe('WebcomComponent', () => {
  let component: WebcomComponent;
  let fixture: ComponentFixture<WebcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebcomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
