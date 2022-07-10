import product from './product.js';
import * as exports from 'jasmine';

describe('Product', () => {
    describe('getCategories', () => {
        it('should get categories from JSON', () => {
            const input = [{
                    id: '800001',
                    name: 'Papier A4',
                    category: {
                        id: 1,
                        name: 'Papier',
                        position: '3'
                    },
                },
                {
                    id: '90273',
                    name: 'Kugelschreiber',
                    category: {
                        id: 3,
                        name: 'Schreibmaterial',
                        position: '1'
                    },
                },
            ];

            const output = product.getCategories(JSON.stringify(input));

            expect(output).toStrictEqual(['Schreibmaterial', 'Papier']);
        });
    });
});