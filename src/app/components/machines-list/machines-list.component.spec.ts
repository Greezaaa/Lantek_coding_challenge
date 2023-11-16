import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachinesListComponent } from './machines-list.component';
import { MachineComponent } from '@components/machine/machine.component';
import { MachineFetchService } from '@services/machine-fetch.service';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

describe('MachinesListComponent', () => {
  let component: MachinesListComponent;
  let fixture: ComponentFixture<MachinesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, MachinesListComponent, MachineComponent],
      providers: [MachineFetchService],
    }).compileComponents();
    
    fixture = TestBed.createComponent(MachinesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch machines on component initialization', () => {
    const machineFetchService = TestBed.inject(MachineFetchService);
    const fetchMachinesDataSpy = spyOn(machineFetchService, 'fetchMachinesData').and.returnValue(of([]));
  
    component.ngOnInit();
  
    expect(fetchMachinesDataSpy).toHaveBeenCalled();
  });
  it('should fetch machines with specified technology on button click', () => {
    const technology = 2;
    const machineFetchService = TestBed.inject(MachineFetchService);
    const fetchMachinesDataSpy = spyOn(machineFetchService, 'fetchMachinesData').and.returnValue(of([]));
  
    component.filterMachinesByTechnology(technology);
  
    expect(fetchMachinesDataSpy).toHaveBeenCalledWith(technology);
  });

});
