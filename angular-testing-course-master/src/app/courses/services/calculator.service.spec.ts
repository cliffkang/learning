import { CalculatorService } from './calculator.service';
import { TestBed } from '@angular/core/testing';
import { LoggerService } from './logger.service';

describe('CalculatorService', () => {
    let calculator: CalculatorService,
        loggerSpy: any;

    beforeEach(() => {
        loggerSpy = jasmine.createSpyObj('LoggerSerivce', ['log']);
        TestBed.configureTestingModule({
            providers: [
                CalculatorService,
                { provide: LoggerService, useValue: loggerSpy }
            ]
        });
        // calculator = new CalculatorService(loggerSpy);
        calculator = TestBed.get(CalculatorService);
    });

    it('should add two numbers', () => {
        // const logger = new LoggerService();
        // spyOn(logger, 'log');
        // const calculator = new CalculatorService(logger);
        const result = calculator.add(2,2);
        expect(result).toBe(4);
        expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    });

    it('should subtract two numbers', () => {
        const result = calculator.subtract(4,2);
        expect(result).toBe(2);
        expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    })
})