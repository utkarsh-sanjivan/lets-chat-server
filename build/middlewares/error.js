"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.errorConverter = void 0;
const http_status_1 = __importDefault(require("http-status"));
const logger_1 = __importDefault(require("../config/logger"));
const config_1 = __importDefault(require("../config/config"));
const apiError_1 = __importDefault(require("../utils/apiError"));
/**
 * Converts normal error object to ApiError object.
 * @param err - {Object} error object that is to be converted
 * @param req - {Object} request object
 * @param res - {Object} response object
 * @param next - {Function} next middleware function
 */
const errorConverter = (err, req, res, next) => {
    let error = err;
    if (!(error instanceof apiError_1.default)) {
        const statusCode = error.statusCode ? error.statusCode : http_status_1.default.INTERNAL_SERVER_ERROR;
        const message = error.message || http_status_1.default[`${statusCode}_NAME`];
        error = new apiError_1.default(message, statusCode);
    }
    next(error);
};
exports.errorConverter = errorConverter;
/**
 * Handles the error occured during processing.
 * @param err - {Object} error object that is to be converted
 * @param req - {Object} request object
 * @param res - {Object} response object
 * @param next - {Function} next middleware function
 */
// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
    const { statusCode, message } = err;
    res.locals.errorMessage = err.message;
    const response = {
        code: statusCode,
        message,
        ...(config_1.default.env === 'development' && { stack: err.stack }),
    };
    if (config_1.default.env === 'development')
        logger_1.default.error(message);
    res.status(statusCode).send(response);
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=error.js.map