import 'mocha';
import { assert } from 'chai';

import { fileDownload } from '../src/index';
import * as npmPackage from '../src/index';

describe('NPM Package', () => {
    it('should be an object', () => {
        assert.isObject(npmPackage);
    });

    it('should have a file download property', () => {
        assert.property(npmPackage, 'fileDownload');
    });
});

describe('File Download Function', () => {
    it('should be a function', () => {
        assert.isFunction(fileDownload);
    });
});
