"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Service for Test API that provided test data.
 * @param info - {Object} info object that is to be returned
 * @returns {Object} test data object
 */
const test = (info) => {
    return {
        data: 'Test API',
        description: 'This is a test API.',
        name: info.name,
        adress: info.address,
    };
};
exports.default = {
    test,
};
//# sourceMappingURL=test.services.js.map