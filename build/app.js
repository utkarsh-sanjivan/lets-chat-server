"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const http_status_1 = __importDefault(require("http-status"));
const xss_clean_1 = __importDefault(require("xss-clean"));
const apiError_1 = __importDefault(require("./utils/apiError"));
const rateLimiter_1 = __importDefault(require("./middlewares/rateLimiter"));
const config_1 = __importDefault(require("./config/config"));
const error_1 = require("./middlewares/error");
const morgan_1 = __importDefault(require("./config/morgan"));
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
// morgan to log requests
if (config_1.default.env !== 'test')
    app.use(morgan_1.default);
// parse json request body
app.use(express_1.default.json());
// parse urlencoded request body
app.use(express_1.default.urlencoded({ extended: true }));
// set security HTTP headers
app.use((0, helmet_1.default)());
// sanitize request data
app.use((0, xss_clean_1.default)());
// enable cors
app.use((0, cors_1.default)());
// app.options('*', cors());
// Add authentication middleware here
// app.use(Your_Auth_Middleware);
// limit repeated failed requests to auth endpoints
if (config_1.default.env === 'production')
    app.use('/v1', rateLimiter_1.default);
// v1 api routes
app.use('/v1', index_1.default);
// send back a 404 error for any unknown api request
app.use((req, res, next) => next(new apiError_1.default('Not Found', http_status_1.default.NOT_FOUND)));
// convert error to ApiError, if needed
app.use(error_1.errorConverter);
// handle error
app.use(error_1.errorHandler);
exports.default = app;
//# sourceMappingURL=app.js.map