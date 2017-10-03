import { TestBed, inject } from '@angular/core/testing';

import { GooglecivicapiService } from './googlecivicapi.service';

describe('GooglecivicapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GooglecivicapiService]
    });
  });

  it('should be created', inject([GooglecivicapiService], (service: GooglecivicapiService) => {
    expect(service).toBeTruthy();
  }));
});
