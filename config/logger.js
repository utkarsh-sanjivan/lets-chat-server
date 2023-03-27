"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
const moment_1 = __importDefault(require("moment"));
const config_1 = __importDefault(require("./config"));
const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
};
const level = () => {
    const env = config_1.default.env || 'development';
    const isDevelopment = env === 'development';
    return isDevelopment ? 'debug' : 'warn';
};
const colorizer = winston_1.default.format.colorize({ all: true });
const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'cyan',
    http: 'magenta',
    debug: 'white',
};
winston_1.default.addColors(colors);
const format = winston_1.default.format.combine(winston_1.default.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }));
const transports = [
    new winston_1.default.transports.Console({
        format: winston_1.default.format.combine(format, winston_1.default.format.printf((info) => colorizer.colorize(info.level, `${info.timestamp} | ${info.level.toUpperCase()}: ${info.message}`))),
        level: 'debug',
    }),
    new winston_1.default.transports.File({
        format: winston_1.default.format.combine(format, winston_1.default.format.printf((info) => `${info.timestamp} | ${info.level.toUpperCase()}: ${info.message}`)),
        filename: `logs/access-log-${(0, moment_1.default)().format('YYYY-MM-DD')}-log-file.log`,
        level: 'debug',
    }),
];
exports.default = winston_1.default.createLogger({
    level: level(),
    levels,
    format,
    transports,
});
//# sourceMappingURL=logger.js.map