"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line import/no-extraneous-dependencies
const globals_1 = require("@jest/globals");
const http_status_1 = __importDefault(require("http-status"));
const apiError_1 = __importDefault(require("../../../utils/apiError"));
(0, globals_1.describe)('API Error Utils Class Test Cases', () => {
    (0, globals_1.test)('should return correct error status and message', () => {
        return new Promise(() => {
            throw new apiError_1.default('Some error message', http_status_1.default.NOT_FOUND);
        }).catch(err => {
            (0, globals_1.expect)(err.message).toBe('Some error message');
            (0, globals_1.expect)(err.statusCode).toBe(http_status_1.default.NOT_FOUND);
        });
    });
    (0, globals_1.test)(`should return error status as ${http_status_1.default.INTERNAL_SERVER_ERROR} when just error message is passed`, () => {
        return new Promise(() => {
            throw new apiError_1.default('Some error message');
        }).catch(err => {
            (0, globals_1.expect)(err.message).toBe('Some error message');
            (0, globals_1.expect)(err.statusCode).toBe(http_status_1.default.INTERNAL_SERVER_ERROR);
        });
    });
    (0, globals_1.test)('should return the message according to the error status if error message is not provided', () => {
        return new Promise(() => {
            throw new apiError_1.default('', http_status_1.default.NOT_FOUND);
        }).catch(err => {
            (0, globals_1.expect)(err.message).toBe(http_status_1.default[`${http_status_1.default.NOT_FOUND}_NAME`]);
            (0, globals_1.expect)(err.statusCode).toBe(http_status_1.default.NOT_FOUND);
        });
    });
    (0, globals_1.test)('should convert empty error to error with status 500', () => {
        return new Promise(() => {
            throw new apiError_1.default();
        }).catch(err => {
            (0, globals_1.expect)(err.message).toBe(http_status_1.default[`${http_status_1.default.INTERNAL_SERVER_ERROR}_NAME`]);
            (0, globals_1.expect)(err.statusCode).toBe(http_status_1.default.INTERNAL_SERVER_ERROR);
        });
    });
});
//# sourceMappingURL=apiError.spec.js.map