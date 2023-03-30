import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CebacalhoComponent } from './cebacalho.component';

describe('CebacalhoComponent', () => {
  let component: CebacalhoComponent;
  let fixture: ComponentFixture<CebacalhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CebacalhoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CebacalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
