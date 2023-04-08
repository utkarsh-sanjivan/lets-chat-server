"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line import/no-extraneous-dependencies
const globals_1 = require("@jest/globals");
const http_status_1 = __importDefault(require("http-status"));
const node_mocks_http_1 = __importDefault(require("node-mocks-http"));
const error_1 = require("../../../middlewares/error");
const apiError_1 = __importDefault(require("../../../utils/apiError"));
(0, globals_1.describe)('Error Middleware Test Cases', () => {
    (0, globals_1.test)('should convert normal error with message to Api Error', () => {
        const error = new Error('Key not defined');
        const next = jest.fn(err => {
            (0, globals_1.expect)(err.message).toBe('Key not defined');
            (0, globals_1.expect)(err.statusCode).toBe(http_status_1.default.INTERNAL_SERVER_ERROR);
        });
        (0, error_1.errorConverter)(error, node_mocks_http_1.default.createRequest(), node_mocks_http_1.default.createResponse(), next);
        (0, globals_1.expect)(next).toHaveBeenCalledWith(globals_1.expect.any(apiError_1.default));
        (0, globals_1.expect)(next).toHaveBeenCalledTimes(1);
    });
    (0, globals_1.test)('should convert normal error without status and message to Api Error', () => {
        const error = new Error();
        const next = jest.fn(err => {
            (0, globals_1.expect)(err.message).toBe(http_status_1.default[`${http_status_1.default.INTERNAL_SERVER_ERROR}_NAME`]);
            (0, globals_1.expect)(err.statusCode).toBe(http_status_1.default.INTERNAL_SERVER_ERROR);
        });
        (0, error_1.errorConverter)(error, node_mocks_http_1.default.createRequest(), node_mocks_http_1.default.createResponse(), next);
        (0, globals_1.expect)(next).toHaveBeenCalledWith(globals_1.expect.any(apiError_1.default));
        (0, globals_1.expect)(next).toHaveBeenCalledTimes(1);
    });
});
//# sourceMappingURL=error.spec.js.map