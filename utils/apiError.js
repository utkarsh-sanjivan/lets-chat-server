"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
class ApiError extends Error {
    /**
     * Creates API Error objects.
     * @param message - {String} error message
     * @param statusCode - {String} error status
     * @returns {Object} the error object with provided message and status
     */
    constructor(message, statusCode = http_status_1.default.INTERNAL_SERVER_ERROR) {
        super(message);
        this.statusCode = statusCode;
        this.message = message || http_status_1.default[`${statusCode}_NAME`].toString();
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.default = ApiError;
//# sourceMappingURL=apiError.js.map