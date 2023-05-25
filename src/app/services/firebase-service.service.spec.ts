import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FirebaseServiceService } from './firebase-service.service';
import { Data } from '../Models/Data';

describe('FirebaseServiceService', () => {
  let service: FirebaseServiceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FirebaseServiceService],
    });
    service = TestBed.inject(FirebaseServiceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve data from the API', () => {
    const testData: Data =
    {
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
        },

      ],

      experience: [{

          company: "Cascades",
          position: "Sorter",
          startDate: "Nov 2022",
          endDate: "April 2023",
          location: "Ottawa-Ontario",
          role: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
          skills: ["one", "two", "three", "four"]

        },
      ]

    };

    service.getData().subscribe((data: Data) => {
      expect(data).toEqual(testData);
    });

    const req = httpMock.expectOne('https://cloud-developer-a259f-default-rtdb.europe-west1.firebasedatabase.app/data.json');
    expect(req.request.method).toBe('GET');
    req.flush(testData);
  });
});
