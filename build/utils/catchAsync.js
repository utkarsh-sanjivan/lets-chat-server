"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Catches the errors for async function.
 * @param fn - {Function} error message
 */
const catchAsync = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(err => next(err));
};
exports.default = catchAsync;
//# sourceMappingURL=catchAsync.js.map