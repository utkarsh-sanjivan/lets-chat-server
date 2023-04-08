"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./config/config"));
const logger_1 = __importDefault(require("./config/logger"));
const server = app_1.default.listen(config_1.default.port, async () => {
    logger_1.default.info(`Server started on port ${config_1.default.port}`);
});
const exitHandler = () => {
    server.close(() => {
        logger_1.default.info('Server closed');
        process.exit(1);
    });
};
const unexpectedErrorHandler = (error) => {
    logger_1.default.error(error);
    exitHandler();
};
const sigtermHandler = () => {
    logger_1.default.info('SIGTERM received');
    server.close();
};
process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);
process.on('SIGTERM', () => sigtermHandler);
//# sourceMappingURL=index.js.map