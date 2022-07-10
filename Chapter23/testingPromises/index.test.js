import {
    strictEqual
} from 'assert';
import asyncFunction from './index.js';

const data = await asyncFunction(true, 'Hello World');
strictEqual(data, 'Hello World');