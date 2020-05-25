import { TestBed } from '@angular/core/testing';

import { SocialShareService } from './social-share.service';

describe('SocialShareService', () => {
  let service: SocialShareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialShareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
