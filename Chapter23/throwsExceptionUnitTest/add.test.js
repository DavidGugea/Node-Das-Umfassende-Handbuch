import {
    throws
} from 'assert';
import add from './add.js';

throws(() => add('1', 2), Error);