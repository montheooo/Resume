import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationComponent } from './education.component';
import { Education } from '../Models/Education';

describe('EducationComponent', () => {
  let component: EducationComponent;
  let fixture: ComponentFixture<EducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match education data model', () => {

    const education:Education = {

      organizationName:"blessing",
      certificateName:"bsc",
      programDescription:"program",
      startDate:"start-date",
      endDate:"end-date",
      skills:[]

    }

    component.education = education ;
    fixture.detectChanges();
    expect(component.education).toEqual(education);
  });


});
