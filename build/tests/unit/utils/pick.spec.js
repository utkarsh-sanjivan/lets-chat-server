"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line import/no-extraneous-dependencies
const globals_1 = require("@jest/globals");
const pick_1 = __importDefault(require("../../../utils/pick"));
let testObj = null;
(0, globals_1.describe)('pick Utils Test Cases', () => {
    beforeAll(() => {
        testObj = {
            keyA: 'keyA',
            keyB: 'keyB',
            keyC: 'keyC',
            keyD: 'keyD',
            keyE: 'keyE',
        };
    });
    (0, globals_1.test)('should return empty object when no keys are passed', () => {
        (0, globals_1.expect)((0, pick_1.default)(testObj, [])).toStrictEqual({});
    });
    (0, globals_1.test)('should return empty object when wrong keys are passed', () => {
        (0, globals_1.expect)((0, pick_1.default)(testObj, ['keyF'])).toStrictEqual({});
    });
    (0, globals_1.test)('should return object with correct keys when correct keys are passed', () => {
        (0, globals_1.expect)((0, pick_1.default)(testObj, ['keyA', 'keyB', 'keyC'])).toStrictEqual({
            keyA: 'keyA',
            keyB: 'keyB',
            keyC: 'keyC',
        });
    });
    (0, globals_1.test)('should return object with new keys when one or more keys are passed as an array', () => {
        (0, globals_1.expect)((0, pick_1.default)(testObj, [['keyA', 'newKeyA'], ['keyB', 'newKeyB'], 'keyC'])).toStrictEqual({
            newKeyA: 'keyA',
            newKeyB: 'keyB',
            keyC: 'keyC',
        });
    });
});
//# sourceMappingURL=pick.spec.js.map