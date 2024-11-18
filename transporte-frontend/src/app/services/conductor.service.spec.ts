// Ubicación: src/app/services/conductor.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ConductorService } from './conductor.service';

describe('ConductorService', () => {
  let service: ConductorService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConductorService]
    });
    service = TestBed.inject(ConductorService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('debería realizar una solicitud GET para obtener conductores', () => {
    const dummyConductores = [{ id: 1, nombre: 'Juan' }];
    service.getConductores().subscribe(conductores => {
      expect(conductores.length).toBe(1);
      expect(conductores).toEqual(dummyConductores);
    });

    const req = httpMock.expectOne(`${service['apiUrl']}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyConductores);
  });

  it('debería realizar una solicitud POST para crear un conductor', () => {
    const newConductor = { id: 2, nombre: 'Ana' };
    service.createConductor(newConductor).subscribe(conductor => {
      expect(conductor).toEqual(newConductor);
    });

    const req = httpMock.expectOne(`${service['apiUrl']}`);
    expect(req.request.method).toBe('POST');
    req.flush(newConductor);
  });

  it('debería realizar una solicitud PUT para actualizar un conductor', () => {
    const updatedConductor = { id: 1, nombre: 'Carlos' };
    service.updateConductor(updatedConductor).subscribe(conductor => {
      expect(conductor).toEqual(updatedConductor);
    });

    const req = httpMock.expectOne(`${service['apiUrl']}/${updatedConductor.id}`);
    expect(req.request.method).toBe('PUT');
    req.flush(updatedConductor);
  });

  it('debería realizar una solicitud DELETE para eliminar un conductor', () => {
    const conductorId = 1;
    service.deleteConductor(conductorId).subscribe();

    const req = httpMock.expectOne(`${service['apiUrl']}/${conductorId}`);
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });
});
