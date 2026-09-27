import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultiSlotComp } from './multi-slot-comp';

describe('MultiSlotComp', () => {
  let component: MultiSlotComp;
  let fixture: ComponentFixture<MultiSlotComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiSlotComp],
    }).compileComponents();

    fixture = TestBed.createComponent(MultiSlotComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
