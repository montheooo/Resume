import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutMeComponent } from './about-me.component';
import { Profile } from '../Models/Profile';

describe('AboutMeComponent', () => {
  let component: AboutMeComponent;
  let fixture: ComponentFixture<AboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutMeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should bind the input property correctly', () => {
    const profile: Profile = {
      myName: 'John Doe',
      myProfession: 'Software Developer',
      imageProfile: 'profile.jpg',
      linkedinProfile: 'https://www.linkedin.com/johndoe',
      githubProfile: 'https://github.com/johndoe',
      slackProfile: 'johndoe',
      aboutMe: 'I am a passionate software developer with experience in Angular.',
    };

    component.about = profile;
    fixture.detectChanges();

    expect(component.about).toEqual(profile);
  });

});
