import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MachineFetchService } from './machine-fetch.service';
import { environment } from '@env/environment';
import { Machine } from '@interfaces/machine.interface';

describe('MachineFetchService', () => {
  let service: MachineFetchService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MachineFetchService]
    });

    service = TestBed.inject(MachineFetchService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch machines data with the correct URL and headers', () => {
    const mockMachines: Machine[] = [
      { id: '1', name: 'Machine1', manufacturer: 'Manufacturer1', technology: 2 },
      { id: '2', name: 'Machine2', manufacturer: 'Manufacturer2', technology: 3 }
    ];

    service.fetchMachinesData().subscribe(data => {
      expect(data).toEqual(mockMachines);
    });

    const req = httpTestingController.expectOne(environment.API_BASE_URL);
    expect(req.request.method).toEqual('GET');
    expect(req.request.headers.get('Authorization')).toEqual(`Basic ${btoa(`${environment.API_USERNAME}:${environment.API_PASSWORD}`)}`);
    expect(req.request.headers.get('Content-Type')).toEqual('application/json');

    req.flush(mockMachines);
  });

  it('should fetch machines data with the correct URL and headers when a parameter is provided', () => {
    const technologyParam = 3;
    const mockMachines: Machine[] = [
      { id: '3', name: 'Machine3', manufacturer: 'Manufacturer3', technology: technologyParam },
      { id: '4', name: 'Machine4', manufacturer: 'Manufacturer4', technology: technologyParam }
    ];

    service.fetchMachinesData(technologyParam).subscribe(data => {
      expect(data).toEqual(mockMachines);
    });

    const req = httpTestingController.expectOne(`${environment.API_BASE_URL}/${technologyParam}`);
    expect(req.request.method).toEqual('GET');
    expect(req.request.headers.get('Authorization')).toEqual(`Basic ${btoa(`${environment.API_USERNAME}:${environment.API_PASSWORD}`)}`);
    expect(req.request.headers.get('Content-Type')).toEqual('application/json');

    req.flush(mockMachines);
  });
});
