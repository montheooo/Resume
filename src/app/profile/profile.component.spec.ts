import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { Profile } from '../Models/Profile';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should bind the profile input property correctly', () => {
    const profile: Profile = {
      myName: 'John Doe',
      myProfession: 'Software Developer',
      imageProfile: 'profile.jpg',
      linkedinProfile: 'https://www.linkedin.com/johndoe',
      githubProfile: 'https://github.com/johndoe',
      slackProfile: 'johndoe',
      aboutMe: 'I am a passionate software developer with experience in Angular.',
    };

    component.profile = profile;
    fixture.detectChanges();

    expect(component.profile).toEqual(profile);
  });

});
