"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line import/no-extraneous-dependencies
const globals_1 = require("@jest/globals");
const supertest_1 = __importDefault(require("supertest"));
const http_status_1 = __importDefault(require("http-status"));
const app_1 = __importDefault(require("../../app"));
let server = null;
let request = null;
(0, globals_1.describe)('Test Routes Test Cases', () => {
    (0, globals_1.beforeAll)((done) => {
        server = app_1.default.listen(3000);
        request = supertest_1.default.agent(server);
        done();
    });
    (0, globals_1.afterAll)(() => {
        return new Promise(res => server.close(res));
    });
    (0, globals_1.test)('should return 200 and successfully with user info', async () => {
        const res = await request.get('/v1/test/?name=Test Name&address=Test Address').expect(http_status_1.default.OK);
        (0, globals_1.expect)(res.body).toEqual({
            data: 'Test API',
            description: 'This is a test API.',
            name: 'Test Name',
            adress: 'Test Address',
        });
    });
    (0, globals_1.test)(`should return ${http_status_1.default.BAD_REQUEST} and with message Missing Name`, async () => {
        const res = await request.get('/v1/test/?address=Test Address').expect(http_status_1.default.BAD_REQUEST);
        (0, globals_1.expect)(res.body.message).toEqual('Missing Name');
    });
    (0, globals_1.test)(`should return ${http_status_1.default.BAD_REQUEST} and with message Missing Address`, async () => {
        const res = await request.get('/v1/test/?name=Test Name').expect(http_status_1.default.BAD_REQUEST);
        (0, globals_1.expect)(res.body.message).toEqual('Missing Address');
    });
});
//# sourceMappingURL=test.spec.js.map