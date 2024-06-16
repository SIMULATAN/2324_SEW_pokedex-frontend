import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallGrassComponent } from './tall-grass.component';

describe('TallGrassComponent', () => {
  let component: TallGrassComponent;
  let fixture: ComponentFixture<TallGrassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallGrassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TallGrassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
