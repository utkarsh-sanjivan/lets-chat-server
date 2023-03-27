"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line import/no-extraneous-dependencies
const globals_1 = require("@jest/globals");
const app_1 = __importDefault(require("../../../app"));
let server = null;
function isMiddlewareSet(appInstance, middlewareName) {
    let _return = false;
    appInstance._router.stack.forEach(function (layer) {
        if (layer.handle.name === middlewareName) {
            _return = true;
        }
    });
    return _return;
}
(0, globals_1.describe)('Middlewares Test Cases', () => {
    beforeAll((done) => {
        server = app_1.default.listen(3000);
        done();
    });
    afterAll(() => {
        return new Promise(res => server.close(res));
    });
    (0, globals_1.test)('should have Express Middleware', async () => {
        (0, globals_1.expect)(isMiddlewareSet(app_1.default, 'expressInit')).toEqual(true);
    });
    (0, globals_1.test)('should have Express JSON Parser Middleware', async () => {
        (0, globals_1.expect)(isMiddlewareSet(app_1.default, 'jsonParser')).toEqual(true);
    });
    (0, globals_1.test)('should have Express URL Encoded Parser Middleware', async () => {
        (0, globals_1.expect)(isMiddlewareSet(app_1.default, 'urlencodedParser')).toEqual(true);
    });
    (0, globals_1.test)('should have Helmet Middleware', async () => {
        (0, globals_1.expect)(isMiddlewareSet(app_1.default, 'helmetMiddleware')).toEqual(true);
    });
    (0, globals_1.test)('should have CORS Middleware', async () => {
        (0, globals_1.expect)(isMiddlewareSet(app_1.default, 'corsMiddleware')).toEqual(true);
    });
    (0, globals_1.test)('should have Router Middleware', async () => {
        (0, globals_1.expect)(isMiddlewareSet(app_1.default, 'router')).toEqual(true);
    });
    (0, globals_1.test)('should have Error Converter Middleware', async () => {
        (0, globals_1.expect)(isMiddlewareSet(app_1.default, 'errorConverter')).toEqual(true);
    });
    (0, globals_1.test)('should have Error Handler Middleware', async () => {
        (0, globals_1.expect)(isMiddlewareSet(app_1.default, 'errorHandler')).toEqual(true);
    });
    (0, globals_1.test)('should not have Morgan Middleware', async () => {
        (0, globals_1.expect)(isMiddlewareSet(app_1.default, 'logger')).toEqual(false);
    });
});
//# sourceMappingURL=middleware.spec.js.map