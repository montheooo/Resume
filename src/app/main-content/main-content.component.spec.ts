import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentComponent } from './main-content.component';
import { ProfileComponent } from '../profile/profile.component';
import { SocialMediaComponent } from '../social-media/social-media.component';
import { EducationComponent } from '../education/education.component';
import { ExperienceComponent } from '../experience/experience.component';
import { Data } from '../Models/Data';
import { AboutMeComponent } from '../about-me/about-me.component';

describe('MainContentComponent', () => {
  let component: MainContentComponent;
  let fixture: ComponentFixture<MainContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainContentComponent, ProfileComponent, SocialMediaComponent, EducationComponent, ExperienceComponent, AboutMeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainContentComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match Data model', () => {

    const data:Data = {
      profile: {
      myName: "Denis Monthe Happy",
      myProfession: "Full Stack Developer",
      imageProfile: "https://media.licdn.com/dms/image/D4E03AQFs4gU8ao2QZA/profile-displayphoto-shrink_800_800/0/1682960071683?e=1689206400&v=beta&t=GT2K7GB-BcR5Z6yvOD6G9z1jS2G88M9Wi9Ghy6naiPk",
      linkedinProfile: "https://www.linkedin.com/in/montheooo/",
      githubProfile: "https://github.com/montheooo",
      slackProfile: "https://app.slack.com/",
      aboutMe: "With more than 10 years of experience in the information and communication technology (ICT), I have worked in the areas of infrastructure management, software development and data analytics. I mainly worked in the design and development of several web applications (Frontend and Backend) in the fields of management, logistics, accounting. Today, I am particularly interested in software quality issues, managing software projects following the SCRUM method in order to create robust software systems perfectly adapted to the needs of customers and end users."
    },

    contact: {

      email: "montheooo@yahoo.fr",
      phone: "+1 438-969-7973",
      website: "intelcameroun.net",
      address: "Ottawa-Ontario"
    },

    education: [{

        organizationName: "Humber College",
        certificateName: "Certificate",
        programDescription: "",
        startDate: "Jan 2023",
        endDate: "June 2023",
        skills: ["one"]
      }

    ],

    experience: [{

        company: "Cascades",
        position: "Sorter",
        startDate: "Nov 2022",
        endDate: "April 2023",
        location: "Ottawa-Ontario",
        role: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
        skills: ["one", "two", "three", "four"]

      }

    ]
  }

  component.myData = data ;
  fixture.detectChanges();

    expect(component.myData).toEqual(data);
  });

});
