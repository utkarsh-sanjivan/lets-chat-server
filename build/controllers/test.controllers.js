"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const test_services_1 = __importDefault(require("../services/test.services"));
const apiError_1 = __importDefault(require("../utils/apiError"));
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const pick_1 = __importDefault(require("../utils/pick"));
/**
 * Controller for Test API that provided test data.
 * @param req - {Object} request object
 * @param res - {Object} response object
 */
const testAPI = (0, catchAsync_1.default)(async (req, res) => {
    const info = (0, pick_1.default)(req.query, ['name', 'address']);
    if (!info.name)
        throw new apiError_1.default('Missing Name', http_status_1.default.BAD_REQUEST);
    if (!info.address)
        throw new apiError_1.default('Missing Address', http_status_1.default.BAD_REQUEST);
    const result = await test_services_1.default.test(info);
    res.status(http_status_1.default.OK).json(result);
});
exports.default = {
    testAPI,
};
//# sourceMappingURL=test.controllers.js.map