import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceComponent } from './experience.component';
import { Experience } from '../Models/Experience';

describe('ExperienceComponent', () => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match experience data model', () => {
    const exp:Experience = {

      company:"company",
      companyImage:"image",
      position:"position",
      startDate:"start-date",
      endDate:"end-date",
      location:"location",
      role:"role",
      skills:["skill1", "skill2"]
    }
    component.exp = exp ;
    fixture.detectChanges();
    expect(component.exp).toEqual(exp);
  });


});
