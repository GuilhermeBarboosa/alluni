import { TestBed } from '@angular/core/testing';

import { AnunciarService } from './anunciar.service';

describe('AnunciarService', () => {
  let service: AnunciarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnunciarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
