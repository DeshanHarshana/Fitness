import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DietpalnIntermediatePage } from './dietpaln-intermediate.page';

describe('DietpalnIntermediatePage', () => {
  let component: DietpalnIntermediatePage;
  let fixture: ComponentFixture<DietpalnIntermediatePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DietpalnIntermediatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DietpalnIntermediatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
