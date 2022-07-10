import Calc from './calc.js';
import * as exports from 'jasmine';


describe('Calc', () => {
    let calc;

    beforeEach(() => {
        calc = new Calc();
    });

    describe('add', () => {
        it('should add 1 and 1 adn return 2', () => {
            const reuslt = calc.add(1, 1);

            expect(result).toBe(2);
        });
    });
});