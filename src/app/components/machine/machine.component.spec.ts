import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachineComponent } from './machine.component';
import { CommonModule } from '@angular/common';
import { Machine } from '@interfaces/machine.interface';
import { By } from '@angular/platform-browser';

describe('MachineComponent', () => {
    let component: MachineComponent;
    let fixture: ComponentFixture<MachineComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [CommonModule, MachineComponent],
        });

        fixture = TestBed.createComponent(MachineComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display machine details correctly and apply correct classes', () => {
        const machine2D: Machine = {
            id: '1',
            name: 'Test Machine 2D',
            manufacturer: 'Test Manufacturer',
            technology: 2,
        };
    
        const machine3D: Machine = {
            id: '2',
            name: 'Test Machine 3D',
            manufacturer: 'Test Manufacturer',
            technology: 3,
        };
    
        // Test for 2D machine
        component.machine = machine2D;
        fixture.detectChanges();
    
        let itemElement = fixture.debugElement.query(By.css('.item'));
        expect(itemElement.classes['d2']).toBeTruthy();
        expect(itemElement.classes['d3']).toBeFalsy();
    
        // Test for 3D machine
        component.machine = machine3D;
        fixture.detectChanges();
    
        itemElement = fixture.debugElement.query(By.css('.item'));
        expect(itemElement.classes['d2']).toBeFalsy();
        expect(itemElement.classes['d3']).toBeTruthy();
    });
});
