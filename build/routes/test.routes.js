"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const test_controllers_1 = __importDefault(require("../controllers/test.controllers"));
const router = express_1.default.Router();
router.get('/', test_controllers_1.default.testAPI);
exports.default = router;
//# sourceMappingURL=test.routes.js.map