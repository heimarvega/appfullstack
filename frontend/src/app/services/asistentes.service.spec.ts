import { TestBed, inject } from '@angular/core/testing';

import { AsistentesService } from './asistentes.service';

describe('AsistentesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AsistentesService]
    });
  });

  it('should be created', inject([AsistentesService], (service: AsistentesService) => {
    expect(service).toBeTruthy();
  }));
});
