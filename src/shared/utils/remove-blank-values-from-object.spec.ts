import { removeBlankValuesFromObject } from './remove-blank-values-from-object';

describe('removeBlankValuesFromObject', () => {
    it('returns object without blank values', () => {
        const object = {
            test1: '',
            test2: null,
            test3: undefined,
            correct: true
        }
        expect(removeBlankValuesFromObject(object)).toEqual({
            correct: true
        });
    });
});