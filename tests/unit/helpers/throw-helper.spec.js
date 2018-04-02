import mustNotBeNullOrUndefined from '../../../src/helpers/throw-helper';

describe('Throw Helper', () => {
    it('should throw when passed null', () => {
        expect(() => {
            mustNotBeNullOrUndefined(null);
        }).toThrow('Must not be null or undefined.');
    });

    it('should throw with message when passed null and value name', () => {
        expect(() => {
            mustNotBeNullOrUndefined(null, 'test');
        }).toThrow('test must not be null or undefined.');
    });

    it('should throw when passed undefined', () => {
        expect(() => {
            mustNotBeNullOrUndefined(undefined);
        }).toThrow('Must not be null or undefined.');
    });

    it('should throw with message when passed undefined and value name', () => {
        expect(() => {
            mustNotBeNullOrUndefined(undefined, 'test');
        }).toThrow('test must not be null or undefined.');
    });

    it('should throw when given no arguments', () => {
        expect(() => {
            mustNotBeNullOrUndefined(undefined, undefined);
        }).toThrow('Must not be null or undefined.');
    });

    it('should not throw when given a defined value', () => {
        expect(() => {
            mustNotBeNullOrUndefined(10);
        }).not.toThrow('Must not be null or undefined.');
    });
});